<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2020 Joas Schilling <coding@schilljs.com>
 *
 * @author Côme Chilliet <come.chilliet@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\User_LDAP\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version1130Date20220110154717 extends SimpleMigrationStep {

	/** @var IDBConnection */
	private $dbc;

	public function __construct(IDBConnection $dbc) {
		$this->dbc = $dbc;
	}

	public function getName() {
		return 'Copy ldap_group_mapping data to backup table if needed';
	}

	protected function copyGroupMappingData(string $sourceTable, string $destinationTable): void {
		$insert = $this->dbc->getQueryBuilder();
		$insert->insert($destinationTable)
			->values([
				'ldap_dn' => $insert->createParameter('ldap_dn'),
				'owncloud_name' => $insert->createParameter('owncloud_name'),
				'directory_uuid' => $insert->createParameter('directory_uuid'),
				'ldap_dn_hash' => $insert->createParameter('ldap_dn_hash'),
			]);

		$query = $this->dbc->getQueryBuilder();
		$query->select('*')
			->from($sourceTable);


		$result = $query->executeQuery();
		while ($row = $result->fetch()) {
			$insert
				->setParameter('ldap_dn', $row['ldap_dn'])
				->setParameter('owncloud_name', $row['owncloud_name'])
				->setParameter('directory_uuid', $row['directory_uuid'])
				->setParameter('ldap_dn_hash', $row['ldap_dn_hash'])
				;

			$insert->executeStatement();
		}
		$result->closeCursor();
	}

	/**
	 * @param IOutput $output
	 * @param \Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @since 13.0.0
	 */
	public function preSchemaChange(IOutput $output, \Closure $schemaClosure, array $options) {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('ldap_group_mapping_backup')) {
			// Backup table does not exist
			return;
		}

		$output->startProgress();
		$this->copyGroupMappingData('ldap_group_mapping', 'ldap_group_mapping_backup');
		$output->finishProgress();
	}

	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('ldap_group_mapping_backup')) {
			// Backup table does not exist
			return null;
		}

		$schema->dropTable('ldap_group_mapping');

		return $schema;
	}
}
