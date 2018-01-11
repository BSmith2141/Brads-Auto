/* Style Changer */



/*-------------------------------------------------------------------
|   Name: 			Style Changer									|	
|   Written by: 	Saleem - (http://nicethemes.net)				|
|   Version: 		1.0												|
--------------------------------------------------------------------*/




var styleChanger = {

	initialized: false,
	options: {
		color: '#CCC',
		gradient: 'true'
	},
	
	
	run: function() {
		var $layout = jQuery('#layout');
		var $this = this;
		
		if ($this.initialized) return;
		
		// Style Changer CSS
		$("head").append($('<link rel="stylesheet">').attr("href", "styleswitcher/styleChanger/changer.css") );
		$("head").append($('<link rel="stylesheet/less">').attr("href", "styleswitcher/less/skin.less") );
		$("head").append($('<link rel="stylesheet">').attr("href", "styleswitcher/styleChanger/spectrum.css") );
		
		function addSimpleScript(JSfileName) {
		var js = document.createElement('script');
		js.type = 'text/javascript';
		js.src = JSfileName;
		
		document.body.appendChild(js);
		}
		function addScript(JSfileName) {
		var js = document.createElement('script');
		js.type = 'text/javascript';
		js.src = JSfileName;
		js.onreadystatechange = function() {
		// IE
		if ( js.readyState == 'complete' || js.readyState == 'loaded' ) {
		doSomething();
		}
		};
		js.onload = function() {
		// FF
		doSomething();
		};
		document.body.appendChild(js);
		}
		
		var spectrumfile = 'styleswitcher/styleChanger/spectrum.js';
		addSimpleScript(spectrumfile);
		var beautifierfile = 'styleswitcher/styleChanger/cssbeautify.js';
		addSimpleScript(beautifierfile);
		var cookiefile = 'styleswitcher/styleChanger/cookie.js';
		addSimpleScript(cookiefile);
		$("head").append('<script> less = {env: "development"};</script>');
		var lessfile = 'styleswitcher/less/less.js';
		addScript(lessfile);
		function doSomething(){
				
				
				$this.embedcode();
				$this.events();

				
				$this.initialized = true;

			
		}
	
		//$.styleChangerScript("styleswitcher/styleChanger/cssbeautify.js").done(function(script, textStatus) {});

	},

	embedcode: function() {
					   /* + '<div class="stBlock"><span>Boxed Frames</span><select id="frames" class="form-control styler-dropdown">'
								+ '<option value="">No Frame</option><option value="curves.png">Curves</option><option value="lines.png">lines</option><option value="squares.png">Squares</option><option value="wholes.png">Wholes</option>'
				//frame code	+ '<option value="clips.png">Clips</option>'
								
							+ '</select></div>'
							
							
				version code + '<div class="stBlock"><span>Version</span><select id="versions" class="form-control styler-dropdown"><option value="00">Light</option><option value="10">Dark</option></select></div>'
					   */
		var $this = this;
		var changerhtml = 	  '<div id="stlChanger"><div class="blockChanger bgChanger white-text-color"><a href="#" class="chBut">&nbsp;</a><div class="chBody ">'
							+ '<div class="stBlock"><span>Layout</span><select id="layouts" class="form-control styler-dropdown"><option value="00">Full Width</option><option value="10" selected="selected">Boxed</option></select></div>'
							
							+ '<div class="stBlock" style="padding-bottom:8px;"><span>Background Patterns</span><div id="patterns" class="stBgs">'
							  + '<a href="#" pattern-data=""><img width="15" height="15" src="" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg2.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg2.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg3.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg3.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg4.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg4.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg5.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg5.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg6.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg6.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg7.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg7.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg8.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg8.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg9.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg9.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg10.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg10.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg11.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg11.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg12.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg12.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg13.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg13.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg14.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg14.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg15.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg15.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg16.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg16.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg17.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg17.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg18.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg18.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg19.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg19.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg20.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg20.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg21.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg21.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg22.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg22.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg23.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg23.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg24.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg24.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg25.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg25.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg26.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg26.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg27.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg27.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg28.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg28.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg29.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg29.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg30.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg30.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg31.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg31.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg32.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg32.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg33.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg33.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg34.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg34.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg35.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg35.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg36.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg36.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg37.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg37.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg38.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg38.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg39.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg39.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg40.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg40.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg41.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg41.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg42.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg42.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg43.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg43.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg44.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg44.png" alt="" /></a>'
							  + '<a href="#"  pattern-data="patterns/bg45.png"><img width="15" height="15" src="img/TemplateImg/backgrounds/patterns/bg45.png" alt="" /></a>'
							 
							+ '</div></div>'
							+ '<div class="stBlock"><span>Color Scheme</span><div class="pull-right"><input type="text" id="colorscheme" class="align-left" /></div></div>'
							+ '<div class="stBlock"><span>Background Color</span><div class="pull-right"><input type="text" id="bgcolor" /></div></div>';
							/*+ '<div class="stBlock"><span>Boxed Background</span><div class="pull-right"><input type="text" id="boxedbgcolor" /></div></div>'
							+ '<div class="stBlock"><span>Content Text Color</span><div class="pull-right"><input type="text" id="content-text-color" /></div></div>'
							+ '<div class="stBlock"><span>Heading Font</span><select id="headingfont" class="form-control styler-dropdown">';
								
							var	selectValues = {"Abel" : "Abel","Abril Fatface" : "Abril+Fatface","Aclonica" : "Aclonica","Acme" : "Acme","Actor" : "Actor","Adamina" : "Adamina","Advent Pro" : "Advent+Pro","Aguafina Script" : "Aguafina+Script","Akronim" : "Akronim","Aladin" : "Aladin","Aldrich" : "Aldrich","Alegreya" : "Alegreya","Alegreya SC" : "Alegreya+SC","Alex Brush" : "Alex+Brush","Alfa Slab One" : "Alfa+Slab+One","Alice" : "Alice","Alike" : "Alike","Alike Angular" : "Alike+Angular","Allan" : "Allan","Allerta" : "Allerta","Allerta Stencil" : "Allerta+Stencil","Allura" : "Allura","Almendra" : "Almendra","Almendra Display" : "Almendra+Display","Almendra SC" : "Almendra+SC","Amarante" : "Amarante","Amaranth" : "Amaranth","Amatic SC" : "Amatic+SC","Amethysta" : "Amethysta","Anaheim" : "Anaheim","Andada" : "Andada","Andika" : "Andika","Angkor" : "Angkor","Annie Use Your Telescope" : "Annie+Use+Your+Telescope","Anonymous Pro" : "Anonymous+Pro","Antic" : "Antic","Antic Didone" : "Antic+Didone","Antic Slab" : "Antic+Slab","Anton" : "Anton","Arapey" : "Arapey","Arbutus" : "Arbutus","Arbutus Slab" : "Arbutus+Slab","Architects Daughter" : "Architects+Daughter","Archivo Black" : "Archivo+Black","Archivo Narrow" : "Archivo+Narrow","Arimo" : "Arimo","Arizonia" : "Arizonia","Armata" : "Armata","Artifika" : "Artifika","Arvo" : "Arvo","Asap" : "Asap","Asset" : "Asset","Astloch" : "Astloch","Asul" : "Asul","Atomic Age" : "Atomic+Age","Aubrey" : "Aubrey","Audiowide" : "Audiowide","Autour One" : "Autour+One","Average" : "Average","Average Sans" : "Average+Sans","Averia Gruesa Libre" : "Averia+Gruesa+Libre","Averia Libre" : "Averia+Libre","Averia Sans Libre" : "Averia+Sans+Libre","Averia Serif Libre" : "Averia+Serif+Libre","Bad Script" : "Bad+Script","Balthazar" : "Balthazar","Bangers" : "Bangers","Basic" : "Basic","Battambang" : "Battambang","Baumans" : "Baumans","Bayon" : "Bayon","Belgrano" : "Belgrano","Belleza" : "Belleza","BenchNine" : "BenchNine","Bentham" : "Bentham","Berkshire Swash" : "Berkshire+Swash","Bevan" : "Bevan","Bigelow Rules" : "Bigelow+Rules","Bigshot One" : "Bigshot+One","Bilbo" : "Bilbo","Bilbo Swash Caps" : "Bilbo+Swash+Caps","Bitter" : "Bitter","Black Ops One" : "Black+Ops+One","Bokor" : "Bokor","Bonbon" : "Bonbon","Boogaloo" : "Boogaloo","Bowlby One" : "Bowlby+One","Bowlby One SC" : "Bowlby+One+SC","Brawler" : "Brawler","Bree Serif" : "Bree+Serif","Bubblegum Sans" : "Bubblegum+Sans","Buda" : "Buda","Buenard" : "Buenard","Butcherman" : "Butcherman","Butterfly Kids" : "Butterfly+Kids","Cabin" : "Cabin","Cabin Condensed" : "Cabin+Condensed","Cabin Sketch" : "Cabin+Sketch","Caesar Dressing" : "Caesar+Dressing","Cagliostro" : "Cagliostro","Calligraffitti" : "Calligraffitti","Cambo" : "Cambo","Candal" : "Candal","Cantarell" : "Cantarell","Cantata One" : "Cantata+One","Cantora One" : "Cantora+One","Capriola" : "Capriola","Cardo" : "Cardo","Carme" : "Carme","Carrois Gothic" : "Carrois+Gothic","Carrois Gothic SC" : "Carrois+Gothic+SC","Carter One" : "Carter+One","Caudex" : "Caudex","Cedarville Cursive" : "Cedarville+Cursive","Ceviche One" : "Ceviche+One","Changa One" : "Changa+One","Chango" : "Chango","Chau Philomene One" : "Chau+Philomene+One","Chela One" : "Chela+One","Chelsea Market" : "Chelsea+Market","Chenla" : "Chenla","Cherry Cream Soda" : "Cherry+Cream+Soda","Cherry Swash" : "Cherry+Swash","Chewy" : "Chewy","Chicle" : "Chicle","Chivo" : "Chivo","Cinzel" : "Cinzel","Cinzel Decorative" : "Cinzel+Decorative","Clicker Script" : "Clicker+Script","Coda" : "Coda","Coda Caption" : "Coda+Caption","Codystar" : "Codystar","Combo" : "Combo","Comfortaa" : "Comfortaa","Coming Soon" : "Coming+Soon","Concert One" : "Concert+One","Condiment" : "Condiment","Content" : "Content","Contrail One" : "Contrail+One","Convergence" : "Convergence","Cookie" : "Cookie","Copse" : "Copse","Corben" : "Corben","Courgette" : "Courgette","Cousine" : "Cousine","Coustard" : "Coustard","Covered By Your Grace" : "Covered+By+Your+Grace","Crafty Girls" : "Crafty+Girls","Creepster" : "Creepster","Crete Round" : "Crete+Round","Crimson Text" : "Crimson+Text","Croissant One" : "Croissant+One","Crushed" : "Crushed","Cuprum" : "Cuprum","Cutive" : "Cutive","Cutive Mono" : "Cutive+Mono","Damion" : "Damion","Dancing Script" : "Dancing+Script","Dangrek" : "Dangrek","Dawning of a New Day" : "Dawning+of+a+New+Day","Days One" : "Days+One","Delius" : "Delius","Delius Swash Caps" : "Delius+Swash+Caps","Delius Unicase" : "Delius+Unicase","Della Respira" : "Della+Respira","Denk One" : "Denk+One","Devonshire" : "Devonshire","Didact Gothic" : "Didact+Gothic","Diplomata" : "Diplomata","Diplomata SC" : "Diplomata+SC","Domine" : "Domine","Donegal One" : "Donegal+One","Doppio One" : "Doppio+One","Dorsa" : "Dorsa","Dosis" : "Dosis","Dr Sugiyama" : "Dr+Sugiyama","Droid Sans" : "Droid+Sans","Droid Sans Mono" : "Droid+Sans+Mono","Droid Serif" : "Droid+Serif","Duru Sans" : "Duru+Sans","Dynalight" : "Dynalight","EB Garamond" : "EB+Garamond","Eagle Lake" : "Eagle+Lake","Eater" : "Eater","Economica" : "Economica","Electrolize" : "Electrolize","Elsie" : "Elsie","Elsie Swash Caps" : "Elsie+Swash+Caps","Emblema One" : "Emblema+One","Emilys Candy" : "Emilys+Candy","Engagement" : "Engagement","Englebert" : "Englebert","Enriqueta" : "Enriqueta","Erica One" : "Erica+One","Esteban" : "Esteban","Euphoria Script" : "Euphoria+Script","Ewert" : "Ewert","Exo" : "Exo","Expletus Sans" : "Expletus+Sans","Fanwood Text" : "Fanwood+Text","Fascinate" : "Fascinate","Fascinate Inline" : "Fascinate+Inline","Faster One" : "Faster+One","Fasthand" : "Fasthand","Federant" : "Federant","Federo" : "Federo","Felipa" : "Felipa","Fenix" : "Fenix","Finger Paint" : "Finger+Paint","Fjalla One" : "Fjalla+One","Fjord One" : "Fjord+One","Flamenco" : "Flamenco","Flavors" : "Flavors","Fondamento" : "Fondamento","Fontdiner Swanky" : "Fontdiner+Swanky","Forum" : "Forum","Francois One" : "Francois+One","Freckle Face" : "Freckle+Face","Fredericka the Great" : "Fredericka+the+Great","Fredoka One" : "Fredoka+One","Freehand" : "Freehand","Fresca" : "Fresca","Frijole" : "Frijole","Fruktur" : "Fruktur","Fugaz One" : "Fugaz+One","GFS Didot" : "GFS+Didot","GFS Neohellenic" : "GFS+Neohellenic","Gabriela" : "Gabriela","Gafata" : "Gafata","Galdeano" : "Galdeano","Galindo" : "Galindo","Gentium Basic" : "Gentium+Basic","Gentium Book Basic" : "Gentium+Book+Basic","Geo" : "Geo","Geostar" : "Geostar","Geostar Fill" : "Geostar+Fill","Germania One" : "Germania+One","Gilda Display" : "Gilda+Display","Give You Glory" : "Give+You+Glory","Glass Antiqua" : "Glass+Antiqua","Glegoo" : "Glegoo","Gloria Hallelujah" : "Gloria+Hallelujah","Goblin One" : "Goblin+One","Gochi Hand" : "Gochi+Hand","Gorditas" : "Gorditas","Goudy Bookletter 1911" : "Goudy+Bookletter+1911","Graduate" : "Graduate","Grand Hotel" : "Grand+Hotel","Gravitas One" : "Gravitas+One","Great Vibes" : "Great+Vibes","Griffy" : "Griffy","Gruppo" : "Gruppo","Gudea" : "Gudea","Habibi" : "Habibi","Hammersmith One" : "Hammersmith+One","Hanalei" : "Hanalei","Hanalei Fill" : "Hanalei+Fill","Handlee" : "Handlee","Hanuman" : "Hanuman","Happy Monkey" : "Happy+Monkey","Headland One" : "Headland+One","Henny Penny" : "Henny+Penny","Herr Von Muellerhoff" : "Herr+Von+Muellerhoff","Holtwood One SC" : "Holtwood+One+SC","Homemade Apple" : "Homemade+Apple","Homenaje" : "Homenaje","IM Fell DW Pica" : "IM+Fell+DW+Pica","IM Fell DW Pica SC" : "IM+Fell+DW+Pica+SC","IM Fell Double Pica" : "IM+Fell+Double+Pica","IM Fell Double Pica SC" : "IM+Fell+Double+Pica+SC","IM Fell English" : "IM+Fell+English","IM Fell English SC" : "IM+Fell+English+SC","IM Fell French Canon" : "IM+Fell+French+Canon","IM Fell French Canon SC" : "IM+Fell+French+Canon+SC","IM Fell Great Primer" : "IM+Fell+Great+Primer","IM Fell Great Primer SC" : "IM+Fell+Great+Primer+SC","Iceberg" : "Iceberg","Iceland" : "Iceland","Imprima" : "Imprima","Inconsolata" : "Inconsolata","Inder" : "Inder","Indie Flower" : "Indie+Flower","Inika" : "Inika","Irish Grover" : "Irish+Grover","Istok Web" : "Istok+Web","Italiana" : "Italiana","Italianno" : "Italianno","Jacques Francois" : "Jacques+Francois","Jacques Francois Shadow" : "Jacques+Francois+Shadow","Jim Nightshade" : "Jim+Nightshade","Jockey One" : "Jockey+One","Jolly Lodger" : "Jolly+Lodger","Josefin Sans" : "Josefin+Sans","Josefin Slab" : "Josefin+Slab","Joti One" : "Joti+One","Judson" : "Judson","Julee" : "Julee","Julius Sans One" : "Julius+Sans+One","Junge" : "Junge","Jura" : "Jura","Just Another Hand" : "Just+Another+Hand","Just Me Again Down Here" : "Just+Me+Again+Down+Here","Kameron" : "Kameron","Karla" : "Karla","Kaushan Script" : "Kaushan+Script","Kavoon" : "Kavoon","Keania One" : "Keania+One","Kelly Slab" : "Kelly+Slab","Kenia" : "Kenia","Khmer" : "Khmer","Kite One" : "Kite+One","Knewave" : "Knewave","Kotta One" : "Kotta+One","Koulen" : "Koulen","Kranky" : "Kranky","Kreon" : "Kreon","Kristi" : "Kristi","Krona One" : "Krona+One","La Belle Aurore" : "La+Belle+Aurore","Lancelot" : "Lancelot","Lato" : "Lato","League Script" : "League+Script","Leckerli One" : "Leckerli+One","Ledger" : "Ledger","Lekton" : "Lekton","Lemon" : "Lemon","Libre Baskerville" : "Libre+Baskerville","Life Savers" : "Life+Savers","Lilita One" : "Lilita+One","Limelight" : "Limelight","Linden Hill" : "Linden+Hill","Lobster" : "Lobster","Lobster Two" : "Lobster+Two","Londrina Outline" : "Londrina+Outline","Londrina Shadow" : "Londrina+Shadow","Londrina Sketch" : "Londrina+Sketch","Londrina Solid" : "Londrina+Solid","Lora" : "Lora","Love Ya Like A Sister" : "Love+Ya+Like+A+Sister","Loved by the King" : "Loved+by+the+King","Lovers Quarrel" : "Lovers+Quarrel","Luckiest Guy" : "Luckiest+Guy","Lusitana" : "Lusitana","Lustria" : "Lustria","Macondo" : "Macondo","Macondo Swash Caps" : "Macondo+Swash+Caps","Magra" : "Magra","Maiden Orange" : "Maiden+Orange","Mako" : "Mako","Marcellus" : "Marcellus","Marcellus SC" : "Marcellus+SC","Marck Script" : "Marck+Script","Margarine" : "Margarine","Marko One" : "Marko+One","Marmelad" : "Marmelad","Marvel" : "Marvel","Mate" : "Mate","Mate SC" : "Mate+SC","Maven Pro" : "Maven+Pro","McLaren" : "McLaren","Meddon" : "Meddon","MedievalSharp" : "MedievalSharp","Medula One" : "Medula+One","Megrim" : "Megrim","Meie Script" : "Meie+Script","Merienda" : "Merienda","Merienda One" : "Merienda+One","Merriweather" : "Merriweather","Merriweather Sans" : "Merriweather+Sans","Metal" : "Metal","Metal Mania" : "Metal+Mania","Metamorphous" : "Metamorphous","Metrophobic" : "Metrophobic","Michroma" : "Michroma","Milonga" : "Milonga","Miltonian" : "Miltonian","Miltonian Tattoo" : "Miltonian+Tattoo","Miniver" : "Miniver","Miss Fajardose" : "Miss+Fajardose","Modern Antiqua" : "Modern+Antiqua","Molengo" : "Molengo","Molle" : "Molle","Monda" : "Monda","Monofett" : "Monofett","Monoton" : "Monoton","Monsieur La Doulaise" : "Monsieur+La+Doulaise","Montaga" : "Montaga","Montez" : "Montez","Montserrat" : "Montserrat","Montserrat Alternates" : "Montserrat+Alternates","Montserrat Subrayada" : "Montserrat+Subrayada","Moul" : "Moul","Moulpali" : "Moulpali","Mountains of Christmas" : "Mountains+of+Christmas","Mouse Memoirs" : "Mouse+Memoirs","Mr Bedfort" : "Mr+Bedfort","Mr Dafoe" : "Mr+Dafoe","Mr De Haviland" : "Mr+De+Haviland","Mrs Saint Delafield" : "Mrs+Saint+Delafield","Mrs Sheppards" : "Mrs+Sheppards","Muli" : "Muli","Mystery Quest" : "Mystery+Quest","Neucha" : "Neucha","Neuton" : "Neuton","New Rocker" : "New+Rocker","News Cycle" : "News+Cycle","Niconne" : "Niconne","Nixie One" : "Nixie+One","Nobile" : "Nobile","Nokora" : "Nokora","Norican" : "Norican","Nosifer" : "Nosifer","Nothing You Could Do" : "Nothing+You+Could+Do","Noticia Text" : "Noticia+Text","Nova Cut" : "Nova+Cut","Nova Flat" : "Nova+Flat","Nova Mono" : "Nova+Mono","Nova Oval" : "Nova+Oval","Nova Round" : "Nova+Round","Nova Script" : "Nova+Script","Nova Slim" : "Nova+Slim","Nova Square" : "Nova+Square","Numans" : "Numans","Nunito" : "Nunito","Odor Mean Chey" : "Odor+Mean+Chey","Offside" : "Offside","Old Standard TT" : "Old+Standard+TT","Oldenburg" : "Oldenburg","Oleo Script" : "Oleo+Script","Oleo Script Swash Caps" : "Oleo+Script+Swash+Caps","Open Sans" : "Open+Sans:300","Open Sans Condensed" : "Open+Sans+Condensed:300","Oranienbaum" : "Oranienbaum","Orbitron" : "Orbitron","Oregano" : "Oregano","Orienta" : "Orienta","Original Surfer" : "Original+Surfer","Oswald" : "Oswald","Over the Rainbow" : "Over+the+Rainbow","Overlock" : "Overlock","Overlock SC" : "Overlock+SC","Ovo" : "Ovo","Oxygen" : "Oxygen","Oxygen Mono" : "Oxygen+Mono","PT Mono" : "PT+Mono","PT Sans" : "PT+Sans","PT Sans Caption" : "PT+Sans+Caption","PT Sans Narrow" : "PT+Sans+Narrow","PT Serif" : "PT+Serif","PT Serif Caption" : "PT+Serif+Caption","Pacifico" : "Pacifico","Paprika" : "Paprika","Parisienne" : "Parisienne","Passero One" : "Passero+One","Passion One" : "Passion+One","Patrick Hand" : "Patrick+Hand","Patrick Hand SC" : "Patrick+Hand+SC","Patua One" : "Patua+One","Paytone One" : "Paytone+One","Peralta" : "Peralta","Permanent Marker" : "Permanent+Marker","Petit Formal Script" : "Petit+Formal+Script","Petrona" : "Petrona","Philosopher" : "Philosopher","Piedra" : "Piedra","Pinyon Script" : "Pinyon+Script","Pirata One" : "Pirata+One","Plaster" : "Plaster","Play" : "Play","Playball" : "Playball","Playfair Display" : "Playfair+Display","Playfair Display SC" : "Playfair+Display+SC","Podkova" : "Podkova","Poiret One" : "Poiret+One","Poller One" : "Poller+One","Poly" : "Poly","Pompiere" : "Pompiere","Pontano Sans" : "Pontano+Sans","Port Lligat Sans" : "Port+Lligat+Sans","Port Lligat Slab" : "Port+Lligat+Slab","Prata" : "Prata","Preahvihear" : "Preahvihear","Press Start 2P" : "Press+Start+2P","Princess Sofia" : "Princess+Sofia","Prociono" : "Prociono","Prosto One" : "Prosto+One","Puritan" : "Puritan","Purple Purse" : "Purple+Purse","Quando" : "Quando","Quantico" : "Quantico","Quattrocento" : "Quattrocento","Quattrocento Sans" : "Quattrocento+Sans","Questrial" : "Questrial","Quicksand" : "Quicksand","Quintessential" : "Quintessential","Qwigley" : "Qwigley","Racing Sans One" : "Racing+Sans+One","Radley" : "Radley","Raleway" : "Raleway","Raleway Dots" : "Raleway+Dots","Rambla" : "Rambla","Rammetto One" : "Rammetto+One","Ranchers" : "Ranchers","Rancho" : "Rancho","Rationale" : "Rationale","Redressed" : "Redressed","Reenie Beanie" : "Reenie+Beanie","Revalia" : "Revalia","Ribeye" : "Ribeye","Ribeye Marrow" : "Ribeye+Marrow","Righteous" : "Righteous","Risque" : "Risque","Roboto" : "Roboto","Roboto Condensed" : "Roboto+Condensed","Rochester" : "Rochester","Rock Salt" : "Rock+Salt","Rokkitt" : "Rokkitt","Romanesco" : "Romanesco","Ropa Sans" : "Ropa+Sans","Rosario" : "Rosario","Rosarivo" : "Rosarivo","Rouge Script" : "Rouge+Script","Ruda" : "Ruda","Rufina" : "Rufina","Ruge Boogie" : "Ruge+Boogie","Ruluko" : "Ruluko","Rum Raisin" : "Rum+Raisin","Ruslan Display" : "Ruslan+Display","Russo One" : "Russo+One","Ruthie" : "Ruthie","Rye" : "Rye","Sacramento" : "Sacramento","Sail" : "Sail","Salsa" : "Salsa","Sanchez" : "Sanchez","Sancreek" : "Sancreek","Sansita One" : "Sansita+One","Sarina" : "Sarina","Satisfy" : "Satisfy","Scada" : "Scada","Schoolbell" : "Schoolbell","Seaweed Script" : "Seaweed+Script","Sevillana" : "Sevillana","Seymour One" : "Seymour+One","Shadows Into Light" : "Shadows+Into+Light","Shadows Into Light Two" : "Shadows+Into+Light+Two","Shanti" : "Shanti","Share" : "Share","Share Tech" : "Share+Tech","Share Tech Mono" : "Share+Tech+Mono","Shojumaru" : "Shojumaru","Short Stack" : "Short+Stack","Siemreap" : "Siemreap","Sigmar One" : "Sigmar+One","Signika" : "Signika","Signika Negative" : "Signika+Negative","Simonetta" : "Simonetta","Sintony" : "Sintony","Sirin Stencil" : "Sirin+Stencil","Six Caps" : "Six+Caps","Skranji" : "Skranji","Slackey" : "Slackey","Smokum" : "Smokum","Smythe" : "Smythe","Sniglet" : "Sniglet","Snippet" : "Snippet","Snowburst One" : "Snowburst+One","Sofadi One" : "Sofadi+One","Sofia" : "Sofia","Sonsie One" : "Sonsie+One","Sorts Mill Goudy" : "Sorts+Mill+Goudy","Source Code Pro" : "Source+Code+Pro","Source Sans Pro" : "Source+Sans+Pro","Special Elite" : "Special+Elite","Spicy Rice" : "Spicy+Rice","Spinnaker" : "Spinnaker","Spirax" : "Spirax","Squada One" : "Squada+One","Stalemate" : "Stalemate","Stalinist One" : "Stalinist+One","Stardos Stencil" : "Stardos+Stencil","Stint Ultra Condensed" : "Stint+Ultra+Condensed","Stint Ultra Expanded" : "Stint+Ultra+Expanded","Stoke" : "Stoke","Strait" : "Strait","Sue Ellen Francisco" : "Sue+Ellen+Francisco","Sunshiney" : "Sunshiney","Supermercado One" : "Supermercado+One","Suwannaphum" : "Suwannaphum","Swanky and Moo Moo" : "Swanky+and+Moo+Moo","Syncopate" : "Syncopate","Tangerine" : "Tangerine","Taprom" : "Taprom","Tauri" : "Tauri","Telex" : "Telex","Tenor Sans" : "Tenor+Sans","Text Me One" : "Text+Me+One","The Girl Next Door" : "The+Girl+Next+Door","Tienne" : "Tienne","Tinos" : "Tinos","Titan One" : "Titan+One","Titillium Web" : "Titillium+Web","Trade Winds" : "Trade+Winds","Trocchi" : "Trocchi","Trochut" : "Trochut","Trykker" : "Trykker","Tulpen One" : "Tulpen+One","Ubuntu" : "Ubuntu","Ubuntu Condensed" : "Ubuntu+Condensed","Ubuntu Mono" : "Ubuntu+Mono","Ultra" : "Ultra","Uncial Antiqua" : "Uncial+Antiqua","Underdog" : "Underdog","Unica One" : "Unica+One","UnifrakturCook" : "UnifrakturCook","UnifrakturMaguntia" : "UnifrakturMaguntia","Unkempt" : "Unkempt","Unlock" : "Unlock","Unna" : "Unna","VT323" : "VT323","Vampiro One" : "Vampiro+One","Varela" : "Varela","Varela Round" : "Varela+Round","Vast Shadow" : "Vast+Shadow","Vibur" : "Vibur","Vidaloka" : "Vidaloka","Viga" : "Viga","Voces" : "Voces","Volkhov" : "Volkhov","Vollkorn" : "Vollkorn","Voltaire" : "Voltaire","Waiting for the Sunrise" : "Waiting+for+the+Sunrise","Wallpoet" : "Wallpoet","Walter Turncoat" : "Walter+Turncoat","Warnes" : "Warnes","Wellfleet" : "Wellfleet","Wendy One" : "Wendy+One","Wire One" : "Wire+One","Yanone Kaffeesatz" : "Yanone+Kaffeesatz","Yellowtail" : "Yellowtail","Yeseva One" : "Yeseva+One","Yesteryear" : "Yesteryear","Zeyada" : "Zeyada",}
							//var headingfontweight = {1: "400",2: "400",3: "400",4: "400",5: "400",6: "400",7: "400",8: "400",9: "400",10: "400",11: "400",12: "400",13: "400",14: "400",15: "400",16: "400",17: "400",18: "400",19: "400",20: "400",21: "400",22: "400",23: "400",24: "400",25: "400",26: "400",27: "400",28: "400",29: "400",30: "400",31: "400",32: "400",33: "400",34: "400",35: "400",36: "400",37: "400",38: "400",39: "400",40: "400",41: "400",42: "400",43: "400",44: "400",45: "400",46: "400",47: "400",48: "400",49: "400",50: "400",51: "400",52: "400",53: "400",54: "400",55: "400",56: "400",57: "400",58: "400",59: "400",60: "400",61: "400",62: "400",63: "400",64: "400",65: "400",66: "400",67: "400",68: "400",69: "400",70: "400",71: "400",72: "400",73: "400",74: "400",75: "400",76: "400",77: "400",78: "400",79: "400",80: "400",81: "400",82: "400",83: "400",84: "400",85: "400",86: "400",87: "400",88: "400",89: "400",90: "400",91: "400",92: "400",93: "400",94: "400",95: "400",96: "400",97: "400",98: "400",99: "400",100: "400",101: "400",102: "400",103: "400",104: "400",105: "400",106: "400",107: "400",108: "400",109: "400",110: "400",111: "400",112: "400",113: "400",114: "400",115: "400",116: "400",117: "400",118: "400",119: "400",120: "400",121: "400",122: "400",123: "400",124: "400",125: "400",126: "400",127: "400",128: "400",129: "400",130: "400",131: "400",132: "400",133: "400",134: "400",135: "400",136: "400",137: "400",138: "400",139: "400",140: "400",141: "400",142: "400",143: "400",144: "400",145: "400",146: "400",147: "400",148: "400",149: "400",150: "400",151: "400",152: "400",153: "400",154: "400",155: "400",156: "400",157: "400",158: "400",159: "400",160: "400",161: "400",162: "400",163: "400",164: "400",165: "400",166: "400",167: "400",168: "400",169: "400",170: "400",171: "400",172: "400",173: "400",174: "400",175: "400",176: "400",177: "400",178: "400",179: "400",180: "400",181: "400",182: "400",183: "400",184: "400",185: "400",186: "400",187: "400",188: "400",189: "400",190: "400",191: "400",192: "400",193: "400",194: "400",195: "400",196: "400",197: "400",198: "400",199: "400",200: "400",201: "400",202: "400",203: "400",204: "400",205: "400",206: "400",207: "400",208: "400",209: "400",210: "400",211: "400",212: "400",213: "400",214: "400",215: "400",216: "400",217: "400",218: "400",219: "400",220: "400",221: "400",222: "400",223: "400",224: "400",225: "400",226: "400",227: "400",228: "400",229: "400",230: "400",231: "400",232: "400",233: "400",234: "400",235: "400",236: "400",237: "400",238: "400",239: "400",240: "400",241: "400",242: "400",243: "400",244: "400",245: "400",246: "400",247: "400",248: "400",249: "400",250: "400",251: "400",252: "400",253: "400",254: "400",255: "400",256: "400",257: "400",258: "400",259: "400",260: "400",261: "400",262: "400",263: "400",264: "400",265: "400",266: "400",267: "400",268: "400",269: "400",270: "400",271: "400",272: "400",273: "400",274: "400",275: "400",276: "400",277: "400",278: "400",279: "400",280: "400",281: "400",282: "400",283: "400",284: "400",285: "400",286: "400",287: "400",288: "400",289: "400",290: "400",291: "400",292: "400",293: "400",294: "400",295: "400",296: "400",297: "400",298: "400",299: "400",300: "400",301: "400",302: "400",303: "400",304: "400",305: "400",306: "400",307: "400",308: "400",309: "400",310: "400",311: "400",312: "400",313: "400",314: "400",315: "400",316: "400",317: "400",318: "400",319: "400",320: "400",321: "400",322: "400",323: "400",324: "400",325: "400",326: "400",327: "400",328: "400",329: "400",330: "400",331: "400",332: "400",333: "400",334: "400",335: "400",336: "400",337: "400",338: "400",339: "400",340: "400",341: "400",342: "400",343: "400",344: "400",345: "400",346: "400",347: "400",348: "400",349: "400",350: "400",351: "400",352: "400",353: "400",354: "400",355: "400",356: "400",357: "400",358: "400",359: "400",360: "400",361: "400",362: "400",363: "400",364: "400",365: "400",366: "400",367: "400",368: "400",369: "400",370: "400",371: "400",372: "400",373: "400",374: "400",375: "400",376: "400",377: "400",378: "400",379: "400",380: "400",381: "400",382: "400",383: "400",384: "400",385: "400",386: "400",387: "400",388: "400",389: "400",390: "400",391: "400",392: "400",393: "400",394: "400",395: "400",396: "400",397: "400",398: "400",399: "400",400: "400",401: "400",402: "400",403: "400",404: "400",405: "400",406: "400",407: "400",408: "400",409: "400",410: "400",411: "400",412: "400",413: "400",414: "400",415: "400",416: "400",417: "400",418: "400",419: "400",420: "400",421: "400",422: "400",423: "400",424: "400",425: "400",426: "400",427: "400",428: "400",429: "400",430: "400",431: "400",432: "400",433: "400",434: "400",435: "400",436: "400",437: "400",438: "400",439: "400",440: "400",441: "400",442: "400",443: "400",444: "400",445: "400",446: "400",447: "400",448: "400",449: "400",450: "400",451: "400",452: "400",453: "400",454: "400",455: "400",456: "400",457: "400",458: "400",459: "400",460: "400",461: "400",462: "400",463: "400",464: "400",465: "400",466: "400",467: "400",468: "400",469: "400",470: "400",471: "400",472: "400",473: "400",474: "400",475: "400",476: "400",477: "400",478: "400",479: "400",480: "400",481: "400",482: "400",483: "400",484: "400",485: "400",486: "400",487: "400",488: "400",489: "400",490: "400",491: "400",492: "400",493: "400",494: "400",495: "400",496: "400",497: "400",498: "400",499: "400",500: "400",501: "400",502: "400",503: "400",504: "400",505: "400",506: "400",507: "400",508: "400",509: "400",510: "400",511: "400",512: "400",513: "400",514: "400",515: "400",516: "400",517: "400",518: "400",519: "400",520: "400",521: "400",522: "400",523: "400",524: "400",525: "400",526: "400",527: "400",528: "400",529: "400",530: "400",531: "400",532: "400",533: "400",534: "400",535: "400",536: "400",537: "400",538: "400",539: "400",540: "400",541: "400",542: "400",543: "400",544: "400",545: "400",546: "400",547: "400",548: "400",549: "400",550: "400",551: "400",552: "400",553: "400",554: "400",555: "400",556: "400",557: "400",558: "400",559: "400",560: "400",561: "400",562: "400",563: "400",564: "400",565: "400",566: "400",567: "400",568: "400",569: "400",570: "400",571: "400",572: "400",573: "400",574: "400",575: "400",576: "400",577: "400",578: "400",579: "400",580: "400",581: "400",582: "400",583: "400",584: "400",585: "400",586: "400",587: "400",588: "400",589: "400",590: "400",591: "400",592: "400",593: "400",594: "400",595: "400",596: "400",597: "400",598: "400",599: "400",600: "400",601: "400",602: "400",603: "400",604: "400",605: "400",606: "400",607: "400",608: "400",609: "400",610: "400",611: "400",612: "400",613: "400",614: "400",615: "400",616: "400",617: "400",618: "400",619: "400",620: "400",621: "400",622: "400",623: "400",624: "400",625: "400",626: "400",627: "400",628: "400",629: "400",630: "400",631: "400",632: "400",633: "400",634: "400",635: "400",636: "400",637: "400",638: "400",639: "400",640: "400",641: "400",642: "400",643: "400",644: "400",645: "400"};
							//var headingfontsize = {1: "100%",2: "100%",3: "100%",4: "150%",5: "100%",6: "100%",7: "100%",8: "180%",9: "100%",10: "100%",11: "100%",12: "100%",13: "100%",14: "180%",15: "100%",16: "100%",17: "100%",18: "100%",19: "180%",20: "100%",21: "100%",22: "190%",23: "100%",24: "180%",25: "100%",26: "100%",27: "100%",28: "180%",29: "100%",30: "100%",31: "100%",32: "100%",33: "100%",34: "190%",35: "100%",36: "100%",37: "100%",38: "100%",39: "100%",40: "100%",41: "100%",42: "100%",43: "100%",44: "100%",45: "100%",46: "100%",47: "190%",48: "100%",49: "100%",50: "100%",51: "100%",52: "85%",53: "180%",54: "100%",55: "100%",56: "100%",57: "100%",58: "100%",59: "100%",60: "100%",61: "100%",62: "100%",63: "100%",64: "100%",65: "100%",66: "100%",67: "100%",68: "100%",69: "100%",70: "100%",71: "100%",72: "100%",73: "100%",74: "100%",75: "100%",76: "100%",77: "130%",78: "180%",79: "100%",80: "180%",81: "190%",82: "100%",83: "100%",84: "100%",85: "100%",86: "100%",87: "120%",88: "120%",89: "100%",90: "100%",91: "100%",92: "100%",93: "100%",94: "100%",95: "180%",96: "100%",97: "100%",98: "100%",99: "100%",100: "100%",101: "100%",102: "100%",103: "100%",104: "100%",105: "100%",106: "100%",107: "100%",108: "100%",109: "100%",110: "100%",111: "100%",112: "100%",113: "100%",114: "100%",115: "190%",116: "100%",117: "100%",118: "100%",119: "100%",120: "100%",121: "100%",122: "100%",123: "100%",124: "100%",125: "100%",126: "100%",127: "100%",128: "100%",129: "100%",130: "100%",131: "100%",132: "100%",133: "100%",134: "100%",135: "100%",136: "100%",137: "100%",138: "100%",139: "100%",140: "100%",141: "100%",142: "100%",143: "100%",144: "100%",145: "100%",146: "100%",147: "100%",148: "100%",149: "100%",150: "100%",151: "100%",152: "100%",153: "100%",154: "100%",155: "100%",156: "100%",157: "100%",158: "100%",159: "100%",160: "190%",161: "100%",162: "100%",163: "100%",164: "100%",165: "100%",166: "100%",167: "100%",168: "100%",169: "85%",170: "85%",171: "100%",172: "100%",173: "100%",174: "190%",175: "100%",176: "190%",177: "100%",178: "100%",179: "100%",180: "100%",181: "190%",182: "100%",183: "100%",184: "100%",185: "100%",186: "100%",187: "100%",188: "100%",189: "100%",190: "100%",191: "190%",192: "100%",193: "100%",194: "120%",195: "100%",196: "100%",197: "100%",198: "100%",199: "100%",200: "100%",201: "100%",202: "100%",203: "100%",204: "100%",205: "100%",206: "100%",207: "100%",208: "100%",209: "100%",210: "100%",211: "100%",212: "100%",213: "100%",214: "100%",215: "100%",216: "100%",217: "100%",218: "100%",219: "100%",220: "100%",221: "100%",222: "100%",223: "100%",224: "100%",225: "100%",226: "100%",227: "100%",228: "100%",229: "100%",230: "100%",231: "100%",232: "100%",233: "100%",234: "100%",235: "100%",236: "100%",237: "100%",238: "100%",239: "100%",240: "100%",241: "100%",242: "100%",243: "110%",244: "100%",245: "100%",246: "100%",247: "100%",248: "100%",249: "110%",250: "190%",251: "100%",252: "100%",253: "100%",254: "100%",255: "100%",256: "100%",257: "100%",258: "100%",259: "100%",260: "100%",261: "100%",262: "100%",263: "200%",264: "110%",265: "100%",266: "100%",267: "100%",268: "100%",269: "100%",270: "100%",271: "100%",272: "100%",273: "100%",274: "100%",275: "100%",276: "100%",277: "100%",278: "100%",279: "100%",280: "100%",281: "100%",282: "100%",283: "100%",284: "100%",285: "100%",286: "100%",287: "200%",288: "100%",289: "100%",290: "100%",291: "100%",292: "100%",293: "100%",294: "100%",295: "100%",296: "100%",297: "100%",298: "100%",299: "100%",300: "100%",301: "100%",302: "100%",303: "100%",304: "100%",305: "100%",306: "100%",307: "100%",308: "100%",309: "100%",310: "100%",311: "100%",312: "100%",313: "100%",314: "100%",315: "100%",316: "100%",317: "200%",318: "100%",319: "100%",320: "100%",321: "100%",322: "100%",323: "100%",324: "100%",325: "100%",326: "100%",327: "100%",328: "100%",329: "100%",330: "100%",331: "100%",332: "100%",333: "100%",334: "100%",335: "100%",336: "100%",337: "100%",338: "100%",339: "100%",340: "100%",341: "200%",342: "100%",343: "100%",344: "100%",345: "100%",346: "100%",347: "100%",348: "100%",349: "100%",350: "100%",351: "100%",352: "100%",353: "100%",354: "100%",355: "100%",356: "100%",357: "100%",358: "100%",359: "100%",360: "100%",361: "100%",362: "100%",363: "200%",364: "100%",365: "200%",366: "100%",367: "100%",368: "100%",369: "100%",370: "100%",371: "100%",372: "100%",373: "100%",374: "100%",375: "100%",376: "100%",377: "100%",378: "100%",379: "250%",380: "100%",381: "100%",382: "100%",383: "100%",384: "200%",385: "100%",386: "250%",387: "100%",388: "100%",389: "100%",390: "100%",391: "100%",392: "100%",393: "100%",394: "100%",395: "100%",396: "100%",397: "100%",398: "250%",399: "250%",400: "200%",401: "100%",402: "100%",403: "100%",404: "100%",405: "100%",406: "100%",407: "100%",408: "100%",409: "100%",410: "100%",411: "100%",412: "100%",413: "100%",414: "100%",415: "100%",416: "100%",417: "100%",418: "100%",419: "100%",420: "100%",421: "100%",422: "100%",423: "100%",424: "100%",425: "100%",426: "100%",427: "100%",428: "100%",429: "100%",430: "100%",431: "100%",432: "100%",433: "100%",434: "100%",435: "100%",436: "100%",437: "100%",438: "100%",439: "100%",440: "100%",441: "100%",442: "100%",443: "100%",444: "100%",445: "100%",446: "100%",447: "100%",448: "100%",449: "100%",450: "100%",451: "100%",452: "100%",453: "100%",454: "100%",455: "100%",456: "100%",457: "100%",458: "100%",459: "100%",460: "100%",461: "100%",462: "100%",463: "100%",464: "100%",465: "100%",466: "100%",467: "100%",468: "100%",469: "100%",470: "100%",471: "100%",472: "100%",473: "100%",474: "100%",475: "100%",476: "100%",477: "100%",478: "100%",479: "100%",480: "100%",481: "100%",482: "100%",483: "100%",484: "100%",485: "100%",486: "100%",487: "100%",488: "100%",489: "100%",490: "100%",491: "100%",492: "100%",493: "100%",494: "100%",495: "100%",496: "100%",497: "100%",498: "100%",499: "100%",500: "100%",501: "100%",502: "100%",503: "100%",504: "100%",505: "100%",506: "100%",507: "100%",508: "100%",509: "100%",510: "100%",511: "100%",512: "100%",513: "100%",514: "100%",515: "100%",516: "100%",517: "100%",518: "100%",519: "100%",520: "100%",521: "100%",522: "250%",523: "100%",524: "100%",525: "200%",526: "100%",527: "100%",528: "100%",529: "100%",530: "200%",531: "100%",532: "200%",533: "100%",534: "100%",535: "100%",536: "100%",537: "100%",538: "100%",539: "100%",540: "100%",541: "100%",542: "100%",543: "100%",544: "100%",545: "100%",546: "100%",547: "100%",548: "100%",549: "100%",550: "100%",551: "100%",552: "100%",553: "100%",554: "100%",555: "100%",556: "100%",557: "100%",558: "100%",559: "100%",560: "200%",561: "100%",562: "100%",563: "100%",564: "100%",565: "100%",566: "100%",567: "100%",568: "100%",569: "100%",570: "100%",571: "100%",572: "100%",573: "100%",574: "100%",575: "100%",576: "100%",577: "100%",578: "100%",579: "250%",580: "110%",581: "100%",582: "200%",583: "100%",584: "100%",585: "100%",586: "100%",587: "100%",588: "100%",589: "100%",590: "100%",591: "100%",592: "250%",593: "100%",594: "100%",595: "100%",596: "100%",597: "100%",598: "100%",599: "100%",600: "100%",601: "100%",602: "100%",603: "100%",604: "100%",605: "100%",606: "100%",607: "200%",608: "100%",609: "100%",610: "100%",611: "100%",612: "100%",613: "100%",614: "100%",615: "100%",616: "100%",617: "100%",618: "100%",619: "100%",620: "100%",621: "100%",622: "100%",623: "100%",624: "100%",625: "100%",626: "100%",627: "100%",628: "100%",629: "100%",630: "100%",631: "100%",632: "100%",633: "100%",634: "100%",635: "100%",636: "100%",637: "100%",638: "200%",639: "100%",640: "100%",641: "100%",642: "200%",643: "100%",644: "100%"};
							var headingfontsize = {1: 15,2: 13,3: 12,4: 14,5: 13,6: 12,7: 15,8: 20,9: 17,10: 17,11: 12,12: 14,13: 14,14: 20,15: 11,16: 13,17: 13,18: 13,19: 17,20: 11,21: 11,22: 21,23: 14,24: 15,25: 14,26: 13,27: 13,28: 20,29: 12,30: 13,31: 12,32: 12,33: 14,34: 18,35: 13,36: 14,37: 12,38: 12,39: 12,40: 14,41: 12,42: 12,43: 15,44: 11,45: 14,46: 12,47: 22,48: 12,49: 12,50: 12,51: 13,52: 11,53: 17,54: 13,55: 12,56: 15,57: 12,58: 12,59: 14,60: 14,61: 13,62: 13,63: 13,64: 13,65: 15,66: 14,67: 15,68: 12,69: 12,70: 12,71: 12,72: 12,73: 15,74: 17,75: 15,76: 14,77: 12,78: 20,79: 13,80: 20,81: 20,82: 12,83: 12,84: 12,85: 15,86: 15,87: 11,88: 11,89: 12,90: 12,91: 15,92: 15,93: 15,94: 17,95: 22,96: 12,97: 14,98: 14,99: 14,100: 14,101: 15,102: 12,103: 12,104: 13,105: 12,106: 13,107: 12,108: 14,109: 13,110: 13,111: 12,112: 12,113: 13,114: 19,115: 19,116: 14,117: 12,118: 13,119: 13,120: 12,121: 13,122: 12,123: 13,124: 14,125: 15,126: 12,127: 12,128: 12,129: 21,130: 12,131: 13,132: 12,133: 14,134: 12,135: 12,136: 14,137: 17,138: 13,139: 12,140: 12,141: 18,142: 12,143: 12,144: 12,145: 12,146: 12,147: 17,148: 14,149: 14,150: 12,151: 14,152: 12,153: 14,154: 13,155: 12,156: 14,157: 17,158: 18,159: 14,160: 25,161: 12,162: 12,163: 13,164: 11,165: 13,166: 13,167: 20,168: 14,169: 10,170: 10,171: 12,172: 12,173: 12,174: 27,175: 14,176: 25,177: 14,178: 12,179: 12,180: 12,181: 20,182: 14,183: 12,184: 12,185: 15,186: 13,187: 14,188: 14,189: 12,190: 14,191: 25,192: 15,193: 13,194: 14,195: 14,196: 20,197: 15,198: 14,199: 13,200: 14,201: 14,202: 13,203: 17,204: 14,205: 13,206: 13,207: 17,208: 14,209: 12,210: 12,211: 13,212: 15,213: 14,214: 12,215: 12,216: 14,217: 12,218: 14,219: 13,220: 13,221: 14,222: 14,223: 12,224: 14,225: 12,226: 14,227: 15,228: 12,229: 13,230: 14,231: 12,232: 14,233: 15,234: 15,235: 12,236: 12,237: 14,238: 13,239: 15,240: 15,241: 12,242: 12,243: 11,244: 16,245: 13,246: 12,247: 12,248: 18,249: 10,250: 18,251: 14,252: 17,253: 13,254: 13,255: 13,256: 18,257: 12,258: 14,259: 13,260: 13,261: 12,262: 13,263: 28,264: 10,265: 15,266: 15,267: 15,268: 16,269: 15,270: 15,271: 15,272: 15,273: 15,274: 15,275: 15,276: 15,277: 15,278: 17,279: 13,280: 13,281: 12,282: 14,283: 13,284: 14,285: 13,286: 13,287: 25,288: 13,289: 13,290: 18,291: 14,292: 16,293: 15,294: 16,295: 13,296: 14,297: 15,298: 13,299: 13,300: 14,301: 22,302: 22,303: 13,304: 13,305: 17,306: 12,307: 14,308: 14,309: 15,310: 13,311: 13,312: 13,313: 14,314: 13,315: 15,316: 13,317: 25,318: 11,319: 20,320: 16,321: 14,322: 18,323: 14,324: 13,325: 14,326: 12,327: 12,328: 15,329: 13,330: 13,331: 14,332: 15,333: 15,334: 18,335: 16,336: 18,337: 15,338: 13,339: 14,340: 20,341: 30,342: 12,343: 13,344: 14,345: 15,346: 15,347: 14,348: 16,349: 13,350: 13,351: 13,352: 18,353: 13,354: 12,355: 13,356: 17,357: 13,358: 14,359: 14,360: 13,361: 17,362: 13,363: 20,364: 15,365: 20,366: 12,367: 12,368: 12,369: 12,370: 14,371: 15,372: 12,373: 15,374: 13,375: 14,376: 15,377: 14,378: 15,379: 35,380: 13,381: 14,382: 14,383: 13,384: 20,385: 11,386: 30,387: 13,388: 25,389: 13,390: 12,391: 12,392: 13,393: 14,394: 18,395: 17,396: 20,397: 23,398: 30,399: 30,400: 20,401: 14,402: 13,403: 14,404: 14,405: 13,406: 14,407: 20,408: 15,409: 13,410: 14,411: 20,412: 10,413: 17,414: 13,415: 13,416: 13,417: 13,418: 13,419: 13,420: 13,421: 13,422: 13,423: 13,424: 13,425: 14,426: 13,427: 15,428: 13,429: 15,430: 15,431: 14,432: 14,433: 14,434: 12,435: 17,436: 13,437: 13,438: 13,439: 16,440: 14,441: 14,442: 13,443: 13,444: 14,445: 14,446: 13,447: 13,448: 14,449: 12,450: 12,451: 16,452: 12,453: 20,454: 15,455: 15,456: 14,457: 14,458: 12,459: 12,460: 12,461: 13,462: 13,463: 15,464: 13,465: 15,466: 22,467: 16,468: 12,469: 13,470: 18,471: 12,472: 12,473: 13,474: 14,475: 11,476: 13,477: 20,478: 14,479: 14,480: 14,481: 12,482: 13,483: 14,484: 18,485: 14,486: 12,487: 14,488: 14,489: 12,490: 14,491: 14,492: 14,493: 14,494: 14,495: 14,496: 25,497: 13,498: 13,499: 13,500: 14,501: 14,502: 10,503: 13,504: 18,505: 17,506: 17,507: 23,508: 12,509: 13,510: 13,511: 13,512: 14,513: 13,514: 13,515: 19,516: 11,517: 15,518: 22,519: 15,520: 14,521: 12,522: 22,523: 13,524: 13,525: 25,526: 13,527: 14,528: 12,529: 12,530: 25,531: 12,532: 25,533: 16,534: 13,535: 13,536: 12,537: 12,538: 15,539: 17,540: 13,541: 15,542: 20,543: 18,544: 12,545: 17,546: 15,547: 13,548: 14,549: 14,550: 14,551: 12,552: 12,553: 15,554: 11,555: 13,556: 13,557: 14,558: 12,559: 13,560: 25,561: 13,562: 12,563: 20,564: 17,565: 14,566: 14,567: 13,568: 14,569: 15,570: 10,571: 14,572: 14,573: 14,574: 14,575: 14,576: 14,577: 15,578: 15,579: 35,580: 11,581: 14,582: 20,583: 13,584: 13,585: 15,586: 23,587: 20,588: 14,589: 14,590: 20,591: 12,592: 25,593: 14,594: 12,595: 14,596: 14,597: 15,598: 15,599: 13,600: 14,601: 12,602: 14,603: 13,604: 12,605: 15,606: 13,607: 25,608: 13,609: 15,610: 15,611: 12,612: 12,613: 14,614: 15,615: 15,616: 17,617: 15,618: 14,619: 14,620: 14,621: 14,622: 15,623: 14,624: 14,625: 15,626: 15,627: 15,628: 14,629: 14,630: 14,631: 14,632: 17,633: 12,634: 14,635: 14,636: 13,637: 13,638: 20,639: 17,640: 18,641: 13,642: 22,643: 25};

							var headingfonts='';
							var count = 1;
								for (key in selectValues) {
								    
									headingfonts +='<option value="' + selectValues[key] + '" fontsize="'+headingfontsize[count]+'">' + key + '</option>';
								   // alert(headingfonts);
									count=count+1;
								}
							headingfonts += '</select></div>'
							var parafonts ='<div class="stBlock"><span>Content Font</span><select id="contentfont" class="form-control styler-dropdown">'
							//var contentfontweight = {1: "400",2: "400",3: "400",4: "400",5: "400",6: "400",7: "400",8: "400",9: "400",10: "400",11: "400",12: "400",13: "400",14: "400",15: "400",16: "400",17: "400",18: "400",19: "400",20: "400",21: "400",22: "400",23: "400",24: "400",25: "400",26: "400",27: "400",28: "400",29: "400",30: "400",31: "400",32: "400",33: "400",34: "400",35: "400",36: "400",37: "400",38: "400",39: "400",40: "400",41: "400",42: "400",43: "400",44: "400",45: "400",46: "400",47: "400",48: "400",49: "400",50: "400",51: "400",52: "400",53: "400",54: "400",55: "400",56: "400",57: "400",58: "400",59: "400",60: "400",61: "400",62: "400",63: "400",64: "400",65: "400",66: "400",67: "400",68: "400",69: "400",70: "400",71: "400",72: "400",73: "400",74: "400",75: "400",76: "400",77: "400",78: "400",79: "400",80: "400",81: "400",82: "400",83: "400",84: "400",85: "400",86: "400",87: "400",88: "400",89: "400",90: "400",91: "400",92: "400",93: "400",94: "400",95: "400",96: "400",97: "400",98: "400",99: "400",100: "400",101: "400",102: "400",103: "400",104: "400",105: "400",106: "400",107: "400",108: "400",109: "400",110: "400",111: "400",112: "400",113: "400",114: "400",115: "400",116: "400",117: "400",118: "400",119: "400",120: "400",121: "400",122: "400",123: "400",124: "400",125: "400",126: "400",127: "400",128: "400",129: "400",130: "400",131: "400",132: "400",133: "400",134: "400",135: "400",136: "400",137: "400",138: "400",139: "400",140: "400",141: "400",142: "400",143: "400",144: "400",145: "400",146: "400",147: "400",148: "400",149: "400",150: "400",151: "400",152: "400",153: "400",154: "400",155: "400",156: "400",157: "400",158: "400",159: "400",160: "400",161: "400",162: "400",163: "400",164: "400",165: "400",166: "400",167: "400",168: "400",169: "400",170: "400",171: "400",172: "400",173: "400",174: "400",175: "400",176: "400",177: "400",178: "400",179: "400",180: "400",181: "400",182: "400",183: "400",184: "400",185: "400",186: "400",187: "400",188: "400",189: "400",190: "400",191: "400",192: "400",193: "400",194: "400",195: "400",196: "400",197: "400",198: "400",199: "400",200: "400",201: "400",202: "400",203: "400",204: "400",205: "400",206: "400",207: "400",208: "400",209: "400",210: "400",211: "400",212: "400",213: "400",214: "400",215: "400",216: "400",217: "400",218: "400",219: "400",220: "400",221: "400",222: "400",223: "400",224: "400",225: "400",226: "400",227: "400",228: "400",229: "400",230: "400",231: "400",232: "400",233: "400",234: "400",235: "400",236: "400",237: "400",238: "400",239: "400",240: "400",241: "400",242: "400",243: "400",244: "400",245: "400",246: "400",247: "400",248: "400",249: "400",250: "400",251: "400",252: "400",253: "400",254: "400",255: "400",256: "400",257: "400",258: "400",259: "400",260: "400",261: "400",262: "400",263: "400",264: "400",265: "400",266: "400",267: "400",268: "400",269: "400",270: "400",271: "400",272: "400",273: "400",274: "400",275: "400",276: "400",277: "400",278: "400",279: "400",280: "400",281: "400",282: "400",283: "400",284: "400",285: "400",286: "400",287: "400",288: "400",289: "400",290: "400",291: "400",292: "400",293: "400",294: "400",295: "400",296: "400",297: "400",298: "400",299: "400",300: "400",301: "400",302: "400",303: "400",304: "400",305: "400",306: "400",307: "400",308: "400",309: "400",310: "400",311: "400",312: "400",313: "400",314: "400",315: "400",316: "400",317: "400",318: "400",319: "400",320: "400",321: "400",322: "400",323: "400",324: "400",325: "400",326: "400",327: "400",328: "400",329: "400",330: "400",331: "400",332: "400",333: "400",334: "400",335: "400",336: "400",337: "400",338: "400",339: "400",340: "400",341: "400",342: "400",343: "400",344: "400",345: "400",346: "400",347: "400",348: "400",349: "400",350: "400",351: "400",352: "400",353: "400",354: "400",355: "400",356: "400",357: "400",358: "400",359: "400",360: "400",361: "400",362: "400",363: "400",364: "400",365: "400",366: "400",367: "400",368: "400",369: "400",370: "400",371: "400",372: "400",373: "400",374: "400",375: "400",376: "400",377: "400",378: "400",379: "400",380: "400",381: "400",382: "400",383: "400",384: "400",385: "400",386: "400",387: "400",388: "400",389: "400",390: "400",391: "400",392: "400",393: "400",394: "400",395: "400",396: "400",397: "400",398: "400",399: "400",400: "400",401: "400",402: "400",403: "400",404: "400",405: "400",406: "400",407: "400",408: "400",409: "400",410: "400",411: "400",412: "400",413: "400",414: "400",415: "400",416: "400",417: "400",418: "400",419: "400",420: "400",421: "400",422: "400",423: "400",424: "400",425: "400",426: "400",427: "400",428: "400",429: "400",430: "400",431: "400",432: "400",433: "400",434: "400",435: "400",436: "400",437: "400",438: "400",439: "400",440: "400",441: "400",442: "400",443: "400",444: "400",445: "400",446: "400",447: "400",448: "400",449: "400",450: "400",451: "400",452: "400",453: "400",454: "400",455: "400",456: "400",457: "400",458: "400",459: "400",460: "400",461: "400",462: "400",463: "400",464: "400",465: "400",466: "400",467: "400",468: "400",469: "400",470: "400",471: "400",472: "400",473: "400",474: "400",475: "400",476: "400",477: "400",478: "400",479: "400",480: "400",481: "400",482: "400",483: "400",484: "400",485: "400",486: "400",487: "400",488: "400",489: "400",490: "400",491: "400",492: "400",493: "400",494: "400",495: "400",496: "400",497: "400",498: "400",499: "400",500: "400",501: "400",502: "400",503: "400",504: "400",505: "400",506: "400",507: "400",508: "400",509: "400",510: "400",511: "400",512: "400",513: "400",514: "400",515: "400",516: "400",517: "400",518: "400",519: "400",520: "400",521: "400",522: "400",523: "400",524: "400",525: "400",526: "400",527: "400",528: "400",529: "400",530: "400",531: "400",532: "400",533: "400",534: "400",535: "400",536: "400",537: "400",538: "400",539: "400",540: "400",541: "400",542: "400",543: "400",544: "400",545: "400",546: "400",547: "400",548: "400",549: "400",550: "400",551: "400",552: "400",553: "400",554: "400",555: "400",556: "400",557: "400",558: "400",559: "400",560: "400",561: "400",562: "400",563: "400",564: "400",565: "400",566: "400",567: "400",568: "400",569: "400",570: "400",571: "400",572: "400",573: "400",574: "400",575: "400",576: "400",577: "400",578: "400",579: "400",580: "400",581: "400",582: "400",583: "400",584: "400",585: "400",586: "400",587: "400",588: "400",589: "400",590: "400",591: "400",592: "400",593: "400",594: "400",595: "400",596: "400",597: "400",598: "400",599: "400",600: "400",601: "400",602: "400",603: "400",604: "400",605: "400",606: "400",607: "400",608: "400",609: "400",610: "400",611: "400",612: "400",613: "400",614: "400",615: "400",616: "400",617: "400",618: "400",619: "400",620: "400",621: "400",622: "400",623: "400",624: "400",625: "400",626: "400",627: "400",628: "400",629: "400",630: "400",631: "400",632: "400",633: "400",634: "400",635: "400",636: "400",637: "400",638: "400",639: "400",640: "400",641: "400",642: "400",643: "400",644: "400",645: "400"};
							var contentfontsize = {1: "15px",2: "13px",3: "12px",4: "14px",5: "13px",6: "12px",7: "15px",8: "20px",9: "17px",10: "17px",11: "12px",12: "14px",13: "14px",14: "20px",15: "11px",16: "13px",17: "13px",18: "13px",19: "17px",20: "11px",21: "11px",22: "21px",23: "14px",24: "15px",25: "14px",26: "13px",27: "13px",28: "20px",29: "12px",30: "13px",31: "12px",32: "12px",33: "14px",34: "18px",35: "13px",36: "14px",37: "12px",38: "12px",39: "12px",40: "14px",41: "12px",42: "12px",43: "15px",44: "11px",45: "14px",46: "12px",47: "22px",48: "12px",49: "12px",50: "12px",51: "13px",52: "11px",53: "17px",54: "13px",55: "12px",56: "15px",57: "12px",58: "12px",59: "14px",60: "14px",61: "13px",62: "13px",63: "13px",64: "13px",65: "15px",66: "14px",67: "15px",68: "12px",69: "12px",70: "12px",71: "12px",72: "12px",73: "15px",74: "17px",75: "15px",76: "14px",77: "12px",78: "20px",79: "13px",80: "20px",81: "20px",82: "12px",83: "12px",84: "12px",85: "15px",86: "15px",87: "11px",88: "11px",89: "12px",90: "12px",91: "15px",92: "15px",93: "15px",94: "17px",95: "22px",96: "12px",97: "14px",98: "14px",99: "14px",100: "14px",101: "15px",102: "12px",103: "12px",104: "13px",105: "12px",106: "13px",107: "12px",108: "14px",109: "13px",110: "13px",111: "12px",112: "12px",113: "13px",114: "19px",115: "19px",116: "14px",117: "12px",118: "13px",119: "13px",120: "12px",121: "13px",122: "12px",123: "13px",124: "14px",125: "15px",126: "12px",127: "12px",128: "12px",129: "21px",130: "12px",131: "13px",132: "12px",133: "14px",134: "12px",135: "12px",136: "14px",137: "17px",138: "13px",139: "12px",140: "12px",141: "18px",142: "12px",143: "12px",144: "12px",145: "12px",146: "12px",147: "17px",148: "14px",149: "14px",150: "12px",151: "14px",152: "12px",153: "14px",154: "13px",155: "12px",156: "14px",157: "17px",158: "18px",159: "14px",160: "25px",161: "12px",162: "12px",163: "13px",164: "11px",165: "13px",166: "13px",167: "20px",168: "14px",169: "10px",170: "10px",171: "12px",172: "12px",173: "12px",174: "27px",175: "14px",176: "25px",177: "14px",178: "12px",179: "12px",180: "12px",181: "20px",182: "14px",183: "12px",184: "12px",185: "15px",186: "13px",187: "14px",188: "14px",189: "12px",190: "14px",191: "25px",192: "15px",193: "13px",194: "14px",195: "14px",196: "20px",197: "15px",198: "14px",199: "13px",200: "14px",201: "14px",202: "13px",203: "17px",204: "14px",205: "13px",206: "13px",207: "17px",208: "14px",209: "12px",210: "12px",211: "13px",212: "15px",213: "14px",214: "12px",215: "12px",216: "14px",217: "12px",218: "14px",219: "13px",220: "13px",221: "14px",222: "14px",223: "12px",224: "14px",225: "12px",226: "14px",227: "15px",228: "12px",229: "13px",230: "14px",231: "12px",232: "14px",233: "15px",234: "15px",235: "12px",236: "12px",237: "14px",238: "13px",239: "15px",240: "15px",241: "12px",242: "12px",243: "11px",244: "16px",245: "13px",246: "12px",247: "12px",248: "18px",249: "10px",250: "18px",251: "14px",252: "17px",253: "13px",254: "13px",255: "13px",256: "18px",257: "12px",258: "14px",259: "13px",260: "13px",261: "12px",262: "13px",263: "28px",264: "10px",265: "15px",266: "15px",267: "15px",268: "16px",269: "15px",270: "15px",271: "15px",272: "15px",273: "15px",274: "15px",275: "15px",276: "15px",277: "15px",278: "17px",279: "13px",280: "13px",281: "12px",282: "14px",283: "13px",284: "14px",285: "13px",286: "13px",287: "25px",288: "13px",289: "13px",290: "18px",291: "14px",292: "16px",293: "15px",294: "16px",295: "13px",296: "14px",297: "15px",298: "13px",299: "13px",300: "14px",301: "22px",302: "22px",303: "13px",304: "13px",305: "17px",306: "12px",307: "14px",308: "14px",309: "15px",310: "13px",311: "13px",312: "13px",313: "14px",314: "13px",315: "15px",316: "13px",317: "25px",318: "11px",319: "20px",320: "16px",321: "14px",322: "18px",323: "14px",324: "13px",325: "14px",326: "12px",327: "12px",328: "15px",329: "13px",330: "13px",331: "14px",332: "15px",333: "15px",334: "18px",335: "16px",336: "18px",337: "15px",338: "13px",339: "14px",340: "20px",341: "30px",342: "12px",343: "13px",344: "14px",345: "15px",346: "15px",347: "14px",348: "16px",349: "13px",350: "13px",351: "13px",352: "18px",353: "13px",354: "12px",355: "13px",356: "17px",357: "13px",358: "14px",359: "14px",360: "13px",361: "17px",362: "13px",363: "20px",364: "15px",365: "20px",366: "12px",367: "12px",368: "12px",369: "12px",370: "14px",371: "15px",372: "12px",373: "15px",374: "13px",375: "14px",376: "15px",377: "14px",378: "15px",379: "35px",380: "13px",381: "14px",382: "14px",383: "13px",384: "20px",385: "11px",386: "30px",387: "13px",388: "25px",389: "13px",390: "12px",391: "12px",392: "13px",393: "14px",394: "18px",395: "17px",396: "20px",397: "23px",398: "30px",399: "30px",400: "20px",401: "14px",402: "13px",403: "14px",404: "14px",405: "13px",406: "14px",407: "20px",408: "15px",409: "13px",410: "14px",411: "20px",412: "10px",413: "17px",414: "13px",415: "13px",416: "13px",417: "13px",418: "13px",419: "13px",420: "13px",421: "13px",422: "13px",423: "13px",424: "13px",425: "14px",426: "13px",427: "15px",428: "13px",429: "15px",430: "15px",431: "14px",432: "14px",433: "14px",434: "12px",435: "17px",436: "13px",437: "13px",438: "13px",439: "16px",440: "14px",441: "14px",442: "13px",443: "13px",444: "14px",445: "14px",446: "13px",447: "13px",448: "14px",449: "12px",450: "12px",451: "16px",452: "12px",453: "20px",454: "15px",455: "15px",456: "14px",457: "14px",458: "12px",459: "12px",460: "12px",461: "13px",462: "13px",463: "15px",464: "13px",465: "15px",466: "22px",467: "16px",468: "12px",469: "13px",470: "18px",471: "12px",472: "12px",473: "13px",474: "14px",475: "11px",476: "13px",477: "20px",478: "14px",479: "14px",480: "14px",481: "12px",482: "13px",483: "14px",484: "18px",485: "14px",486: "12px",487: "14px",488: "14px",489: "12px",490: "14px",491: "14px",492: "14px",493: "14px",494: "14px",495: "14px",496: "25px",497: "13px",498: "13px",499: "13px",500: "14px",501: "14px",502: "10px",503: "13px",504: "18px",505: "17px",506: "17px",507: "23px",508: "12px",509: "13px",510: "13px",511: "13px",512: "14px",513: "13px",514: "13px",515: "19px",516: "11px",517: "15px",518: "22px",519: "15px",520: "14px",521: "12px",522: "22px",523: "13px",524: "13px",525: "25px",526: "13px",527: "14px",528: "12px",529: "12px",530: "25px",531: "12px",532: "25px",533: "16px",534: "13px",535: "13px",536: "12px",537: "12px",538: "15px",539: "17px",540: "13px",541: "15px",542: "20px",543: "18px",544: "12px",545: "17px",546: "15px",547: "13px",548: "14px",549: "14px",550: "14px",551: "12px",552: "12px",553: "15px",554: "11px",555: "13px",556: "13px",557: "14px",558: "12px",559: "13px",560: "25px",561: "13px",562: "12px",563: "20px",564: "17px",565: "14px",566: "14px",567: "13px",568: "14px",569: "15px",570: "10px",571: "14px",572: "14px",573: "14px",574: "14px",575: "14px",576: "14px",577: "15px",578: "15px",579: "35px",580: "11px",581: "14px",582: "20px",583: "13px",584: "13px",585: "15px",586: "23px",587: "20px",588: "14px",589: "14px",590: "20px",591: "12px",592: "25px",593: "14px",594: "12px",595: "14px",596: "14px",597: "15px",598: "15px",599: "13px",600: "14px",601: "12px",602: "14px",603: "13px",604: "12px",605: "15px",606: "13px",607: "25px",608: "13px",609: "15px",610: "15px",611: "12px",612: "12px",613: "14px",614: "15px",615: "15px",616: "17px",617: "15px",618: "14px",619: "14px",620: "14px",621: "14px",622: "15px",623: "14px",624: "14px",625: "15px",626: "15px",627: "15px",628: "14px",629: "14px",630: "14px",631: "14px",632: "17px",633: "12px",634: "14px",635: "14px",636: "13px",637: "13px",638: "20px",639: "17px",640: "18px",641: "13px",642: "22px",643: "25px"};
							 count = 1;
							for (key in selectValues) {
								  
								parafonts +='<option value="' + selectValues[key] + '" fontsize="'+contentfontsize[count]+'">' + key + '</option>';
								count=count+1;
							}
							parafonts +='</select></div>';
							
			changerhtml = changerhtml + headingfonts + parafonts;
		*/
		
		
		var modalHTML ='<div style="margin-top:15px;font: 11px/1.428571429 sans-serif !important;"><a class="btn btn-default btn-xs" id="resetcss">Reset</a><a id="getcss" class="btn btn-default btn-xs pull-right" data-toggle="modal" data-target="#myModal">Get CSS</a></div></div></div></div>'
		+'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel">Custom Skin CSS</h4></div><textarea readonly="readonly" id="getCSSTextarea" class="modal-body" style="width: 578px; height: 600px; overflow-y:scroll;">...</textarea></div></div></div></div>';
		changerhtml =changerhtml + modalHTML ;
		$("div.body-wrapper").append(changerhtml);
		

	},

	events: function() {

	
				if($.cookie('layoutwidth') != null) {
					var cook = $.cookie('layoutwidth');
					
					var internalstylestring2  = "<style> #layout{ max-width:" + cook + "}</style>";
					$('head').append(internalstylestring2);
					if(cook =='100%')
					$( "select#layouts" ).val('00');
					else
					$("select#layouts").val('10');
				} 
				
				$("#colorscheme").spectrum();
				$("#colorscheme").show();
				if($.cookie("colorscheme") != null){
					var color = $.cookie("colorscheme");
					var cssstring =".tabs-style-3 .nav-pills li a:hover, .tabs-style-3 .nav-pills li a:focus, .tabs-style-3 .nav-pills li.active a, .element:hover .portfolio-texbox, .tabs-style-2 .nav-pills li a:hover, .tabs-style-2 .nav-pills li a:focus, .tabs-style-2 .nav-pills li.active a, .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus, .btn-gray:hover, .btn-gray:focus, .btn-gray:active, .btn-gray.active, .open .dropdown-toggle.btn-gray, .primary-bg-color, .btn-primary, .testimonial.testimonial-version4 .textbox, .testimonial.testimonial-version4 .item .textbox:after, .price-table-head h3, #main-nav ul ul a:hover, #main-nav ul ul .hover > a, #main-nav ul ul .current > a, #main-nav ul ul .current > a:hover, .icon-text-block2:hover .btn-default, .number-list li:before, .item:hover .portfolio-texbox, .item:hover .portfolio-texbox, .btn-default.selected, .footer hr.primary-bg-color, .panel-primary > .panel-heading ,.progress-bar-primary, .pager li > a:hover, .pager li > a:focus, .pagination > .active > a, .pagination > .active > span,.pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus, .pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus , .btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active,.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default, .panel-primary > .panel-heading, #main-nav ul ul a:hover, #main-nav ul ul .hover > a, #main-nav ul ul .current > a, #main-nav ul ul .current > a:hover{ background-color:"+ color+ "!important;color:#fff!important;}";
			
					cssstring += "#main-nav ul ul,.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary, .pager li > a:hover, .pager li > a:focus, .form-control:focus, .btn-gray:hover, .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus, .btn-default,  .btn-primary, .bordered-heading.panel-primary .panel-heading, .tag-box-version1, .tag-box-version2, .tag-box-version3, .tag-box-version4, .tag-box-version6, .tag-box-version7, .custom-alert-primary, .twitter-widget .twitter-item:hover, .twitter-widget  .primary-border, .primary-border-bottom, .header-title, .register-block, .twitter-widget .twitter-item:hover, .panel-primary > .panel-heading ,.panel-primary, .pagination > .active > a, .pagination > .active > span,.pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus, .pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus, .tab-content > .active, .pill-content > .active, .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus, .nav-tabs, .btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active, .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default, blockquote, .panel-primary > .panel-heading, .panel-primary, #main-nav a:hover, #main-nav .hover > a, #main-nav .current > a{ border-color:"+ color + ";}";
					cssstring +="#logo,span.primary-color, .testimonial.testimonial-version4 .item .textbox:after, .not-ie #main-nav .current:after, .btn-default, a:hover, a:focus,  .primary-color, .bordered-heading.panel-primary .panel-heading, .alert-primary, .custom-alert-primary, .twitter-item a, .thumbnail-text:hover h4, .price-table:hover .price-tag, .price-table.active .price-tag, .btn-link:hover a,.icon-text-block:hover i.block-icon, #main-nav .current > a, .btn-default a, .category-widget ul li a:hover, .footer hr.primary-bg-color, .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus, .nav > li > a:hover, .nav > li > a:focus, .btn-link:hover, .btn-link:focus, a:focus{color:"+ color + "}";
					
					cssstring +=".twitter-widget .twitter-item:hover:after{border-top-color:"+ color+";}";
					cssstring +=".testimonial.testimonial-version4 .item .textbox:after,.thumbnail-text:hover .heading h4,.content-color-link:hover,a.underlined:hover, #main-nav > ul > li > a:hover, #main-nav > ul > li.current > a{color:"+ color+"!important;}";
					var internalstylestring  = "<style>" + cssstring + "</style>";
					$('head').append(internalstylestring);
					
					$("#colorscheme").spectrum("set", color );
					
				}
				else
				{
					$("#colorscheme").spectrum("set", "rgb(106, 168, 79)" );
				}
				
				$("#boxedbgcolor").spectrum();
				$("#boxedbgcolor").show();
				if($.cookie("versionsbgcolor") != null) {
					jQuery('#layout').css({'background-color':$.cookie('versionsbgcolor')});$.cookie("layoutbgcolor")
					//,.navbar-fixed-top .header-wrap .wrap-inner .container
					//jQuery('.navbar-fixed-top .header-wrap .container').css({'background-color':$.cookie('versionsbgcolor')+$.cookie("layoutbgcolor")});
					
					$("#colorscheme").spectrum();
					$("#colorscheme").show();
					$("#boxedbgcolor").spectrum("set", $.cookie('versionsbgcolor') );
				}
				else
				{
					$("#boxedbgcolor").spectrum("set", "transparent" );
				
				}

				/*if($.cookie("versionscolor") != null){
					
					jQuery('#layout').css({'color':$.cookie('versionscolor')});
					$("#colorscheme").spectrum();
					$("#colorscheme").show();
					if($.cookie('versionscolor') != null)
					$("#versionscolor").spectrum("set", $.cookie('versionscolor') );
					else
					$("#versionscolor").spectrum("set", "#444" );
					
				}	*/
				
				$("#content-text-color").spectrum();
				$("#content-text-color").show();
				if($.cookie("contentTextColor") != null){
					var color = $.cookie("contentTextColor");
					$("dl,p,.price-table-content li,#main-nav ul li a, ul li, ol li,.tabs-style-2 ul.nav-pills li a,.headline .item i.circle-border").css("color", color );
					$("small, span, #main-nav a:after,.icon-text-block i.block-icon,.testimonial-metadata em").css("color", color );
					$("h1,h2,h3,h4,h5,h6,.content-color-link,a.underlined").css("color", color );
					var cssstring = ".element:hover .portfolio-texbox p,.element:hover .portfolio-texbox h5{color:#fff !important;}.element .portfolio-texbox p,.element .portfolio-texbox h5{color:#444 !important;}";
					cssstring +=".tag-box-version5,.tag-box-version7{border-color:"+color+"}";
			
					var contentcssstring="";
					if($.cookie("colorscheme")!= null)
					contentcssstring =".testimonial-metadata span,.thumbnail-text:hover .heading h4,.icon-text-block:hover i.block-icon,.content-color-link:hover,#main-nav > ul > li > a:hover, #main-nav > ul > li.current > a{color:"+ $.cookie("colorscheme")+"!important;}";
					else
					contentcssstring =".testimonial-metadata span,.thumbnail-text:hover .heading h4,.icon-text-block:hover i.block-icon,.content-color-link:hover,#main-nav > ul > li > a:hover, #main-nav > ul > li.current > a{color: rgb(106, 168, 79)!important;}";
					
					var internalstylestring2  = "<style>" + contentcssstring + cssstring + "</style>";
					$('head').append(internalstylestring2);
					
					$("#content-text-color").spectrum("set", color );
					
				}	
				else
				{
					$("#content-text-color").spectrum("set", "#444" );
				
				}
				/*if($.cookie("frame") != null){
					jQuery('#layout').css({'color':$.cookie('versionscolor')});
				}*/	
				$("#bgcolor").spectrum();
				$("#bgcolor").show();
				if($.cookie("layoutbgcolor") != null){
					var color = $.cookie("layoutbgcolor");
					$("div.body-wrapper").css("background-color", color );
					//,.navbar-fixed-top .header-wrap
					$("#bgcolor").spectrum("set", color );
					
			
				}
				else
				{
					$("#bgcolor").spectrum("set", "transparent" );
				
				}
				
				if($.cookie("pattern") != null){
				     var patternUrl = $.cookie("patternUrl");
					 $("body").css("background-image", patternUrl );
		 
				}
				if($.cookie("headingfontfamily") != null){
					var fontsize = $.cookie("headingfontsize");
					$('head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family='+  $.cookie("headingfontfamilyurl") +'" type="text/css" />');
					$('h1,h2,h3,h4,h5,h6,.page-header').css({'font-family': $.cookie("headingfontfamily") + ",'serif'"});
					$('h6').css({'font-size': fontsize +"px"  });
					$('h5').css({'font-size': +fontsize+3 +"px" });
					$('h4').css({'font-size': +fontsize+6 +"px" });
					$('h3').css({'font-size': +fontsize+12 +"px" });
					$('h2').css({'font-size': +fontsize+18 +"px" });
					$('h1').css({'font-size': +fontsize+24 +"px" });
					$( "select#headingfont" ).val($.cookie("headingfontfamilyurl"));
					
				}	
				if($.cookie("contentfontfamily") != null){
					$('head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family='+  $.cookie("contentfontfamilyurl") +'" type="text/css" />');
					$('.twitter-item,.custom-alert,.alert,p,label,small, ul > li, ol > li,a,em,td,th').css({'font-family': $.cookie("contentfontfamily") + ",'serif'",'font-size': $.cookie("contentfontsize") });
					$( "select#contentfont" ).val($.cookie("contentfontfamilyurl"));
				}
				
				
		/* Style Changer Autohide */

		jQuery('.chBut').parent().delay(1000).animate({left:'-170px'}, 500, function(){
			jQuery(this).find('.chBut').next('.chBody').css({display:'none'});
			jQuery(this).find('.chBut').addClass('closed');
		}); 
		
		/*Styler Javascript*/
		
		/* Style Changer Toggle */
		jQuery('.chBut').click(function(){
			if (jQuery(this).hasClass('closed')){
				jQuery(this).next('.chBody').css({display:'block'}).parent().animate({left:0}, 500, function(){
					jQuery(this).find('.chBut').removeClass('closed');
				});
			} else {
				jQuery(this).parent().animate({left:'-170px'}, 500, function(){
					jQuery(this).find('.chBut').next('.chBody').css({display:'none'});
					jQuery(this).find('.chBut').addClass('closed');
				});
			}
			
			return false;
		});
		
		$("#boxedbgcolor").spectrum({
		
		
			allowEmpty:true,
			showInput: true,
			className: "boxed-bg",
			showInitial: true,
			showPalette: true,
			showSelectionPalette: true,
			showAlpha: true,
			maxPaletteSize: 10,
			preferredFormat: "rgb",
			localStorageKey: "spectrum.demo",
			
			show: function () {

			},
			beforeShow: function () {
			
			},
			

			palette: [
				["rgba(255, 255, 255,0)","rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
				"rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
				["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
				"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
				["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
				"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
				"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
				"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
				"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
				"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
				"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
				"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
				"rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
				"rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
				"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
				"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
			],

			
			change: function (color) {
				boxedbackgroundstyleModifier(color);
			},
			clickoutFiresChange: true,
			move:function (color) {
				boxedbackgroundstyleModifier(color);
			}
  
		});
		function boxedbackgroundstyleModifier(color){
			
			$("#layout").css("background-color", color );
			//,.navbar-fixed-top .header-wrap .wrap-inner .container
			//$(".navbar-fixed-top .header-wrap .container").css("background-color", color + $.cookie("layoutbgcolor"));
			
			$.cookie("versionsbgcolor", color);
			
		}
		$("#content-text-color").spectrum({
		
		
			allowEmpty:true,
			showInput: true,
			className: "content-text-spectrum",
			showInitial: true,
			showPalette: true,
			showSelectionPalette: true,
			showAlpha: true,
			maxPaletteSize: 10,
			preferredFormat: "rgb",
			localStorageKey: "spectrum.demo",
			
			show: function () {

			},
			beforeShow: function () {

			},
			

			palette: [
				["rgba(255, 255, 255,0)","rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
				"rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
				["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
				"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
				["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
				"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
				"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
				"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
				"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
				"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
				"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
				"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
				"rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
				"rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
				"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
				"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
			],

			
			change: function (color) {
				contentTextstyleModifier(color);
			},
			clickoutFiresChange: true,
			move:function (color) {
				contentTextstyleModifier(color);
			}
  
		});
		function contentTextstyleModifier(color){
			//var headingcolor = color+rgb(1,1,1);
			$("dl,p,.price-table-content li, #main-nav ul li a, ul li, ol li,.tabs-style-2 ul.nav-pills li a,.headline .item i.circle-border").css("color", color );
			$("small, span, #main-nav a:after,.icon-text-block i.block-icon,.testimonial-metadata em").css("color", color );
			$("h1,h2,h3,h4,h5,h6,.content-color-link,a.underlined").css("color", color );
			var cssstring = ".element:hover .portfolio-texbox p,.element:hover .portfolio-texbox h5{color:#fff !important;}.element .portfolio-texbox p,.element .portfolio-texbox h5{color:#444 !important;}";
			cssstring +=".tag-box-version5,.tag-box-version7{border-color:"+color+"}";
			var contentcssstring="";
			if($.cookie("colorscheme")!= null)
			contentcssstring =".testimonial-metadata span,.thumbnail-text:hover .heading h4,.icon-text-block:hover i.block-icon,.content-color-link:hover,#main-nav > ul > li > a:hover,a.underlined:hover, #main-nav > ul > li.current > a{color:"+ $.cookie("colorscheme")+"!important;}";
			else
			contentcssstring =".testimonial-metadata span,.thumbnail-text:hover .heading h4,.icon-text-block:hover i.block-icon,.content-color-link:hover,a.underlined:hover,#main-nav > ul > li > a:hover, #main-nav > ul > li.current > a{color: rgb(106, 168, 79)!important;}";
			
			var internalstylestring2  = "<style>" + contentcssstring + cssstring+"</style>";
			$('head').append(internalstylestring2);
			$.cookie("contentTextColor", color);
			
			//$.removeCookie("pattern");
			//$("#layout").css("background-image", "" );
		
		}
		$("#bgcolor").spectrum({
			allowEmpty:true,
			showInput: true,
			className: "body-bg-spectrum",
			showInitial: true,
			showPalette: true,
			showSelectionPalette: true,
			showAlpha: true,
			maxPaletteSize: 10,
			preferredFormat: "rgb",
			localStorageKey: "spectrum.demo",
			
			show: function () {

			},
			beforeShow: function () {

			},
			

			palette: [
				["rgba(255, 255, 255,0)","rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
				"rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
				["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
				"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
				["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
				"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
				"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
				"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
				"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
				"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
				"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
				"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
				"rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
				"rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
				"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
				"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
			],

			change: function (color) {
				backgroundstyleModifier(color);
			},
			clickoutFiresChange: true,
			move:function (color) {
				backgroundstyleModifier(color);
			}
  
		});
		
		$("#colorscheme").spectrum({
			allowEmpty:true,
			
			showInput: true,
			className: "colorscheme-spectrum",
			showInitial: true,
			showPalette: true,
			showSelectionPalette: true,
			showAlpha: true,
			maxPaletteSize: 10,
			preferredFormat: "rgb",
			localStorageKey: "spectrum.demo",
			
			show: function () {

			},
			beforeShow: function () {

			},
			

			palette: [
				["rgb(19, 101, 151)","rgb(70, 130, 180)","rgb(66, 139, 202)","rgb(41, 122, 211)","rgb(45, 145, 255)","rgb(52, 152, 219)","rgb(54, 149, 213)","rgb(77, 165, 245)","rgb(0, 136, 204)","rgb(33, 169, 225)","#44BCDD","#0CC9E8"],
				["rgb(0, 127, 123)","#00bdbd", "#0aa699","#1caf9a","#1fb5ad",  "#1abdcc","#25ad9f","#3CB6B6",  "#409DAE", "#54BABB","rgb(43, 170, 177)","rgb(71, 198, 186)"],
				["#2ecc71", "#00c077", "rgb(102, 205, 170)","#1aae88","#3bc53b", "#50b459", "#65B688", "#779324",  "#73ba37", "#82b440", "#a0ce4e", "#A4C618"],
				["#ff2d2d", "#C71B1B",  "#e74c3c",  "#E34834","#E34D43", "#e44322", "#e54028","tomato",  "rgb(227, 97, 89)", "#E44832", "#ff6c60","#ff4e50"],
				["#F86D18","#e67e22","#E27A3F", "#DEA154", "#d4a16b","rgb(184, 162, 121)", 	"#f1c615",  "#FFCC00", "#FFD600", "#eabb00",  "#f1c40f",  "#ebda23"],
				["rgb(115, 75, 169)","#8f52c8", "#9b52ec","darksalmon","#725054", "#8FB98B",  "#986736",  "#ab5c2c",	"#A38757",  "#C1C923","#d95c5c", "rgb(74, 91, 125)"],
				["#ec005f","#d00355",  "rgb(199, 28, 119)","#f44ecb", "#f44ecb",  "#F897F5"]
			],

			localStorageKey: "spectrum.homepage",
			clickoutFiresChange: true,
			move:function (color) {
				styleModifier(color);
			}
  
		});
		function backgroundstyleModifier(color){
			
			$("div.body-wrapper").css("background-color", color );
			//,.navbar-fixed-top .header-wrap
			$.cookie("layoutbgcolor", color);
			
			//$.removeCookie("pattern");
			//$("div.body-wrapper").css("background-image", "none" );
		
		}
		
		function styleModifier(color){
			
			var cssstring =".tabs-style-3 .nav-pills li a:hover, .tabs-style-3 .nav-pills li a:focus, .tabs-style-3 .nav-pills li.active a, .element:hover .portfolio-texbox, .tabs-style-2 .nav-pills li a:hover, .tabs-style-2 .nav-pills li a:focus, .tabs-style-2 .nav-pills li.active a, .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus, .btn-gray:hover, .btn-gray:focus, .btn-gray:active, .btn-gray.active, .open .dropdown-toggle.btn-gray, .primary-bg-color, .btn-primary, .testimonial.testimonial-version4 .textbox, .testimonial.testimonial-version4 .item .textbox:after, .price-table-head h3, #main-nav ul ul a:hover, #main-nav ul ul .hover > a, #main-nav ul ul .current > a, #main-nav ul ul .current > a:hover, .icon-text-block2:hover .btn-default, .number-list li:before, .item:hover .portfolio-texbox, .item:hover .portfolio-texbox, .btn-default.selected, .footer hr.primary-bg-color, .panel-primary > .panel-heading ,.progress-bar-primary, .pager li > a:hover, .pager li > a:focus, .pagination > .active > a, .pagination > .active > span,.pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus, .pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus , .btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active,.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default, .panel-primary > .panel-heading, #main-nav ul ul a:hover, #main-nav ul ul .hover > a, #main-nav ul ul .current > a, #main-nav ul ul .current > a:hover{ background-color:"+ color+ "!important;color:#fff!important;}";
	
			cssstring += "#main-nav ul ul,.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary, .pager li > a:hover, .pager li > a:focus, .form-control:focus, .btn-gray:hover, .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus, .btn-default,  .btn-primary, .bordered-heading.panel-primary .panel-heading, .tag-box-version1, .tag-box-version2, .tag-box-version3, .tag-box-version4, .tag-box-version6, .tag-box-version7, .custom-alert-primary, .twitter-widget .twitter-item:hover, .twitter-widget  .primary-border, .primary-border-bottom, .header-title, .register-block, .twitter-widget .twitter-item:hover, .panel-primary > .panel-heading ,.panel-primary, .pagination > .active > a, .pagination > .active > span,.pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus, .pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus, .tab-content > .active, .pill-content > .active, .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus, .nav-tabs, .btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active, .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default, blockquote, .panel-primary > .panel-heading, .panel-primary, #main-nav a:hover, #main-nav .hover > a, #main-nav .current > a{ border-color:"+ color + ";}";
			cssstring +="#logo,span.primary-color, .testimonial.testimonial-version4 .item .textbox:after, .not-ie #main-nav .current:after, .btn-default, a:hover, a:focus,  .primary-color, .bordered-heading.panel-primary .panel-heading, .alert-primary, .custom-alert-primary, .twitter-item a, .thumbnail-text:hover h4, .price-table:hover .price-tag, .price-table.active .price-tag, .btn-link:hover a,.icon-text-block:hover i.block-icon, #main-nav .current > a, .btn-default a, .category-widget ul li a:hover, .footer hr.primary-bg-color, .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus, .nav > li > a:hover, .nav > li > a:focus, .btn-link:hover, .btn-link:focus, a:focus{color:"+ color + "}";
			
			cssstring +=".twitter-widget .twitter-item:hover:after{border-top-color:"+ color+";}";
			cssstring +=".testimonial.testimonial-version4 .item .textbox:after,.content-color-link:hover,a.underlined:hover, #main-nav > ul > li > a:hover, #main-nav > ul > li.current > a{color:"+ color+"!important;}";
						
			var internalstylestring  = "<style>" + cssstring + "</style>";
			$('head').append(internalstylestring);
			$.cookie("colorscheme", color);
		
		}
		
		
		
		/*Dropdown selecct javascript*/
	jQuery('#layouts').change( function(){
		if($( "#layouts option:selected" ).val() == "10")
		{
			
			jQuery('#layout').css({'width':'1230px','margin':'auto'});
			$.cookie("layoutwidth", '1230px;');
			
		}
		else
		{	
			jQuery('#layout').css({"max-width":'100%'});
			$.cookie("layoutwidth", '100%');
			
			
		}
	
	});
	/*jQuery('#versions').change( function(){
		if($( "#versions option:selected" ).val() == "10")
		{
			jQuery('#layout').css({'background-color':'#191919','color':'#ddd'});
			$.cookie("versionsbgcolor", '#191919;');
			$.cookie("versionscolor", '#ddd;');
			
			
		}
		else
		{
			jQuery('#layout').css({'background-color':'transparent','color':'#555'});
			
			$.cookie("versionsbgcolor", 'transparent');
			$.cookie("versionscolor", '#555;');
			
			
		}
	
	});
	jQuery('#frames').change( function(){
		var frame = $( "#frames option:selected" ).val();
		 $(".frame").css("background-image", "url('img/TemplateImg/frames/"+frame+"')" );
		 $(".frame").css("background-repeat","repeat-y");
		$.cookie("frame", "'../img/TemplateImg/frames/"+frame+"'");
		
			
	
	});
	*/
	
	jQuery('#patterns a').click(function(){

		var pattern = $(this).attr("pattern-data");
		
		 $("body").css("background-image", "url('img/TemplateImg/backgrounds/"+pattern+"')" );
		 //,.navbar-fixed-top
		 //$("div.body-wrapper").css("background", $.cookie("headingfontfamily")+ "url('img/TemplateImg/backgrounds/"+pattern+"') no-repeat left top" );
		$.cookie("patternUrl","url('img/TemplateImg/backgrounds/"+pattern+"')");
		$.cookie("pattern", "'../img/TemplateImg/backgrounds/"+pattern+"'");
		
		//$.removeCookie("layoutbgcolor");
		//$("div.body-wrapper").css("background-color", "transparent" );
	});
	
	
	jQuery('#headingfont').change( function(){
		 var fontname = $( "#headingfont option:selected" ).val();
		 var fonttext = $("#headingfont option:selected").text();
		 
		 var fontsize = $( "#headingfont option:selected" ).attr("fontsize");
		
		 $('head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family='+fontname+'" type="text/css" />');
		
		 $.cookie("headingfontfamilyurl", fontname);
		
		$('h1,h2,h3,h4,h5,h6,.page-header').css({'font-family': fonttext + ",'serif'"  });
		$('h6').css({'font-size': fontsize +"px"  });
		$('h5').css({'font-size': +fontsize+3 +"px" });
		$('h4').css({'font-size': +fontsize+6 +"px" });
		$('h3').css({'font-size': +fontsize+12 +"px" });
		$('h2').css({'font-size': +fontsize+18 +"px" });
		$('h1').css({'font-size': +fontsize+24 +"px" });
		
		$.cookie("headingfontfamily", fonttext);
		$.cookie("headingfontsize", fontsize);
		
		
	
	});
	jQuery('#contentfont').change( function(){
	
		var fontname = $( "#contentfont option:selected" ).val();
		var fonttext = $("#contentfont option:selected").text();
		var fontsize = $( "#contentfont option:selected" ).attr("fontsize");
		$('head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family='+fontname+'" type="text/css" />');
		$('.twitter-item,.custom-alert,.alert,p,label,small, ul > li, ol > li,a,em,td,th').css({'font-family': fonttext + ",'serif'",'font-size': fontsize, });
		$.cookie("contentfontfamily", fonttext);
		$.cookie("contentfontsize", fontsize);
		 $.cookie("contentfontfamilyurl", fontname);
		
		 
	
	});
	
	
	$("a#getcss").click(function(e) {
	
				 $("#getCSSTextarea").text("");
				 var layoutwidth ="";
				 if($.cookie("layoutwidth") != null)
				  layoutwidth = $.cookie("layoutwidth");
				 else
				  layoutwidth = "100%";
				  
				   var pattern ="";
				 if($.cookie("pattern") != null)
				  pattern = $.cookie("pattern");
				  
					
				 
				   var colorscheme ="";
				 if($.cookie("colorscheme") != null)
				  colorscheme = $.cookie("colorscheme");
				 else
				  colorscheme = "rgb(106, 168, 79)";
				 
				 var versionsbgcolor ="";
				 if($.cookie("versionsbgcolor") != null)
				  versionsbgcolor = $.cookie("versionsbgcolor");
				 else
				  versionsbgcolor = "transparent";
				 
					var contentTextColor ="";
				 if($.cookie("contentTextColor") != null)
				  contentTextColor = $.cookie("contentTextColor");
				 else
				  contentTextColor = "#444";
				  				
				  
				  var layoutbgcolor ="";
				 if($.cookie("layoutbgcolor") != null)
				  layoutbgcolor = $.cookie("layoutbgcolor");
				 else
					layoutbgcolor ="transparent";
				  
				   
				   var headingfontfamily ="";
				 if($.cookie("headingfontfamily") != null)
				  headingfontfamily = $.cookie("headingfontfamily");
				 else
				  headingfontfamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif;";
				  
				   var headingfontsize ="";
				 if($.cookie("headingfontsize") != null)
				  headingfontsize = $.cookie("headingfontsize");
				 else
				  headingfontsize = "normal";
				  
				  var contentfontfamily ="";
				 if($.cookie("contentfontfamily") != null)
				  contentfontfamily = $.cookie("contentfontfamily");
				 else
				  contentfontfamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif;";
				  
				   var contentfontsize ="";
				 if($.cookie("contentfontsize") != null)
				  contentfontsize = $.cookie("contentfontsize");
				 else
				  contentfontsize = "small";
				  
				   var headingfontfamilyurl ="";
				 if($.cookie("headingfontfamilyurl") != null)
				  headingfontfamilyurl = $.cookie("headingfontfamilyurl");
				  
				  var contentfontfamilyurl ="";
				 if($.cookie("contentfontfamilyurl") != null)
				  contentfontfamilyurl = $.cookie("contentfontfamilyurl");
				  
				less.modifyVars({ layoutWidth : layoutwidth, versionsbgColor : versionsbgcolor, contentTextColor : contentTextColor, layoutbgColor : layoutbgcolor,  colorScheme : colorscheme, headingFontFamily : headingfontfamily,  headingFontSize : headingfontsize, contentFontFamily : contentfontfamily,  contentFontSize : contentfontsize});
			
				
				$("#getCSSTextarea").text($('style[id^="less:"]').text());
				
				var csstextdata = $("#getCSSTextarea").text();
				var csstextdataResult ="";
				
				if(headingfontfamilyurl !="")
				csstextdataResult = "@import url('http://fonts.googleapis.com/css?family="+headingfontfamilyurl+"');\n";
				
				if(contentfontfamilyurl !="")
				csstextdataResult += "@import url('http://fonts.googleapis.com/css?family="+contentfontfamilyurl+"');\n";
				
				if(pattern !="")
				csstextdataResult += "body{background-image:url("+ pattern +");}\n\n";
				
				csstextdataResult += csstextdata;
				$("#getCSSTextarea").text(csstextdataResult);
				/*options = {
					indent: "\t",
					autosemicolon: true
				};
				var cssdata="";
				cssdata = cssdata + $("#getCSSTextarea").text();

				//$("#getCSSTextarea").text(cssbeautify(cssdata, options));

				//$("#getCSSTextarea").text('<b> Order Id selected</b>');
				/*var result1='{';
							for( var i = 1; i < 646; i++ ) {
								result1 =result1 +i+': "25px",';
							
							}
							result1 +='}';
				 $("#getCSSTextarea").text(result1);*/			
				$("#myModal").modal("show");
				
			});
			$("a#resetcss").click(function(e) {
				$.removeCookie("layoutwidth");
				$.removeCookie("colorscheme");
				//$.removeCookie("versionscolor");
				$.removeCookie("layoutbgcolor");
				$.removeCookie("contentTextColor");
				$.removeCookie("versionsbgcolor");
				//$.removeCookie("frame");
				$.removeCookie("pattern");
				$.removeCookie("headingfontfamily");
				$.removeCookie("headingfontfamilyurl");
				
				$.removeCookie("headingfontsize");
				$.removeCookie("contentfontfamily");
				$.removeCookie("contentfontfamilyurl");
				
				$.removeCookie("contentfontsize");
				
				less.refresh();
				$.cookie("showSwitcher", true);
				window.location.reload();
			});
	
	
	

	
	},


	

};

styleChanger.run();



	
	