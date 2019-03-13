<div class="col-sm-12 col-sm-offset-3 blog-sidebar">
	<div class="sidebar-module sidebar-module-inset">
		<h4>About</h4>
        <p><?php the_author_meta('description'); ?>
	</div>
	<div class="sidebar-module">
		<h4>Archives</h4>
        <?php wp_get_archives('type=monthy'); ?>
	</div>
	<div class="sidebar-module">
		<h4>Elsewhere</h4>
		<ol class="list-unstyled">
			<li><a href="#">GitHub</a></li>
			<li><a href="#">Twitter</a></li>
			<li><a href="#">Facebook</a></li>
		</ol>
	</div>
</div><!-- /.blog-sidebar -->
