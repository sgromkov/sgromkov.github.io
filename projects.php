<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Портфолио Сережи Громкова");
$APPLICATION->SetPageProperty("description", "");
?>

<?$APPLICATION->AddHeadScript("/js/jquery-1.11.1.min.js");?>
<?$APPLICATION->AddHeadScript("/js/isotope.pkgd.min.js");?>
<?$APPLICATION->AddHeadScript("/js/common.js", true);?>
<?$APPLICATION->SetAdditionalCSS("/css/portfolio.css");?>

<div class="lang">
	<ul class="lanf__list">
		<li class="lang__item">
			<span class="lang__text">RU</span>
		</li>
		<li class="lang__item">
			<a href="/en/projects/" class="lang__link">EN</a>
		</li>
	</ul>
</div>

<header class="header">
	<div class="header__menu">
		<ul class="menu">
			<li class="menu__item">
				<a href="/" class="menu__link">Сережа Громков</a>
			</li>
			<li class="menu__item">
				<span class="menu__text">Портфолио</span>
			</li>
		</ul>
	</div>
</header>

<div class="tools">
	<div class="text">
		<p>В&nbsp;верстке придерживаюсь методологии <a href="https://ru.bem.info/" rel="nofollow">БЭМ</a>. Стили пишу на&nbsp;<a href="http://sass-lang.com/" rel="nofollow">Sass</a> и&nbsp;<a href="http://lesscss.org/" rel="nofollow">LESS</a>. Программирую на&nbsp;php и js.<?/* Сайты делаю на&nbsp;<a href="http://www.1c-bitrix.ru/" rel="nofollow">1С-Битриксе</a>.*/?> Интересуюсь React и Angular&nbsp;2.</p>
	</div>
</div>

<?$APPLICATION->IncludeComponent("site:portfolio.list", 'default', array("LANG"=>'RU'));?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>