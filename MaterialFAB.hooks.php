<?php
/**
 * Hooks for Accessibility extension
 *
 * @file
 * @ingroup Extensions
 */

class MaterialFABHooks {
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin) {
		$out->addModules( array( 'ext.MaterialFAB' ) );       
		return true;
	}
}
