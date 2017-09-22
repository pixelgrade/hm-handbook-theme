<?php
/**
 * The sidebar file.
 *
 * @package hm-handbook
 */

namespace HM_Handbook;

?>

<nav class="site-sidebar brand-background-color-light">
	<?php

	if ( has_nav_menu( 'nav-primary' ) ) {

		wp_nav_menu( [
			'theme_location' => 'nav-primary',
			'menu_class'     => 'NavAccordion',
			'link_after'     => '<button class="NavAccordion_Toggle">' . __( 'Toggle', 'hm-handbook' ) .'</button>'
		] );

	} else {

		render_nav_list();

	}

	?>
</nav>
