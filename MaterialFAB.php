<?php

if ( function_exists( 'wfLoadExtension' ) ) {
	wfLoadExtension( 'MaterialFAB' );
	// Keep i18n globals so mergeMessageFileList.php doesn't break
	$wgMessagesDirs['MaterialFAB'] = __DIR__ . '/i18n';
	
	$wgExtensionMessagesFiles['MaterialFABMagic'] = __DIR__ . '/MaterialFAB.i18n.magic.php';
	wfWarn(
		'Deprecated PHP entry point used for Accessibility extension. Please use wfLoadExtension ' .
		'instead, see https://www.mediawiki.org/wiki/Extension_registration for more details.'
	);
	return true;
} else {
	die( 'This version of the Accessibility extension requires MediaWiki 1.25+' );
}
