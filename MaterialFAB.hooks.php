<?php
/**
 * Hooks for Accessibility extension
 *
 * @file
 * @ingroup Extensions
 */

class MaterialFABHooks {
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin) {

        /**if ($wgUser->isLoggedIn()):*/
		  $out->addModules( array( 'ext.MaterialFAB' ) );
        /**endif;*/
        
		return true;
	}
}
