# Lounge Hackers / Logotype

![image](https://raw.github.com/possan/logotype/master/export/png/loungehackers-global-black-180x180.png)
![image](https://raw.github.com/possan/logotype/master/export/png/loungehackers-global-white-180x180.png)
![image](https://raw.github.com/loungehackers/logotype/master/export/png/loungehackers-local-sthlm-black-180x194.png)
![image](https://raw.github.com/loungehackers/logotype/master/export/png/loungehackers-local-sthlm-white-180x194.png)

*The official "Lounge Hackers" logotype.*


## Profile

The logotype comes in two flavors; black and white. All grayscale shades are semi transparent opacities of black or white contrasting the background. This makes it possible to create other color themes by adjusting the color but preserving the opacity.

`./loungehackers-*.ai`


## Localization

The localized versions of the logotype are higher and contain the name of the local group at the top. To create your own local version, use the -localized .ai-file and change the name.

`./loungehackers-localized-*.ai`


## Fonts

The font used is `OpenSans` from the [Google Web Fonts](http://google.com/webfonts/) project. It is Open Source under [Apache License 2.0](http://apache.org/licenses/LICENSE-2.0.txt).

`./vendor/fonts/`


## Icons

The icons used are based on `Glypish` from the [Glypish](http://glypish.com/) project. They are Open Source under [Creative Commons Attribution License 3.0](http://creativecommons.org/licenses/by/3.0/).

`./vendor/icons/`


## Colors

Base colors used in the logotype. Gray shades of black/white not included.

<table>
  <tr>
    <th></th>
    <th>HEX</th>
    <th>RGB</th>
    <th>CMYK</th>
  </tr>
  <tr>
    <td><img src="http://placehold.it/40x40/ffffff/ffffff"></td>
    <td><code>#FFFFFF</code></td>
    <td><code>255, 255, 255</code></td>
    <td><code>0, 0, 0, 0</code></td>
  </tr>
  <tr>
    <td><img src="http://placehold.it/40x40/202020/202020"></td>
    <td><code>#202020</code></td>
    <td><code>20, 20, 20</code></td>
    <td><code>73, 67, 66, 81</code></td>
  </tr>
  <tr>
    <td><img src="http://placehold.it/40x40/B2026/B2026"></td>
    <td><code>#B2026</code></td>
    <td><code>178, 32, 38</code></td>
    <td><code>21, 100, 98, 12</code></td>
  </tr>
</table>


## Formats


### .AI

The **.ai** files contains texts as *text* and are suited for localization and/or translation. Saved in version `CS4`.


### .SVG

The **.svg** files are exported for convenience.

`./export/svg/`

**Export**

```
$ pdf2svg ./loungehackers-global-black.ai ./export/svg/loungehackers-global-black.svg
```

For best quality use Adobe Illustrator `Save as...` instead.


### .PNG

The **.png** files are exported for convenience.

`./export/png/`

**Export**

```
$ inkscape -z -f ./export/svg/loungehackers-global-black.svg -e ./export/png/loungehackers-global-black-180.png -w 180   # 180px wide, with kept aspect-ratio
```

For best quality and optimized size use Adobe Illustrator `Save for Web & Devices` instead.


## Export

For export scripts to work these dependencies needs to be installed:

* `pdf2svg` - conversion from *AI* to *SVG*
* `inkscape` - conversion from *SVG* to *EPS* | *PNG*

Useful:

* `png2ico` - conversion from *PNG* to *ICO*


## Origin

The original logotype was created in non-vectorized/low-resolution format as a draft. This original logotype is kept in `./old/` for reference.


## Credits

* [Jonas Grimfelt](http://github.com/grimen) - original logotype (concept, design and creation)
* [Johan Öbrink](http://github.com/JohanObrink) - vectorized version of the original logotype
* *Agustinus Prasetyo Widodo* - creative input


## License

Release under [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported](http://creativecommons.org/licenses/by-nc-sa/3.0/) (CC BY-NC-SA 3.0).

![image](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_cc.png)
![image](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_by.png)
![image](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_nc.png)
![image](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_sa.png)
