<?php

/**
 * editor install
 *
 * @since 1.2.1
 * @deprecated 2.0
 *
 * @package Redaxscript
 * @category Modules
 * @author Henry Ruhs
 */

function editor_install()
{
	$query = 'INSERT INTO ' . PREFIX . 'modules (name, alias, author, description, version, status, access) VALUES (\'Editor\', \'editor\', \'Redaxmedia\', \'Javascript powered WYSIWYG editor\', \'2.0\', 1, 0)';
	mysql_query($query);
}

/**
 * editor uninstall
 *
 * @since 1.2.1
 * @deprecated 2.0
 *
 * @package Redaxscript
 * @category Modules
 * @author Henry Ruhs
 */

function editor_uninstall()
{
	$query = 'DELETE FROM ' . PREFIX . 'modules WHERE alias = \'editor\' LIMIT 1';
	mysql_query($query);
}
?>