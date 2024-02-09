---
title: Sun
weight: 1
layout: sublist
lastmod: "2022-08-21"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/js/whatsup.js"></script>
<script src="/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="The Sun"
	var objectDesc ="Yellow Dwarf Star"
	var objectImage="sun.jpg"
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Sun.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_actual").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

|                                          |                                                  |                           |
| ---------------------------------------- | :----------------------------------------------: | :-----------------------: |
|                                          |                 <br/>**Actual**                  | **Compared<br/>to Earth** |
| **Distance from Earth to Sun** (average) |               92.956 million miles               |           1 au            |
| **Distance from Earth to Sun** (current) |     <span id="dist_actual">loading...</span><br /><span id="dist_earth_light">loading...</span>     |            --             |
| **Revolution Period**                    |           225&ndash;250 million years            |            --             |
| **Rotation Period**                      |           25&ndash;36 days (see below)           |            --             |
| **Diameter** equatorial                  |                  864,337 miles                   |            --             |
| **Mass**                                 |       1.99&times;10<sup>30</sup>&#x2009;kg       |      332,946 Earths       |
| **Volume**                               | 1.41&times;10<sup>18</sup>&#x2009;km<sup>3</sup> |    1.3 million Earths     |
| **Surface Gravity** equatorial           |                  274&#x2009;m/s                  |         28 Earths         |
| **Temperature**                          |                   (see below)                    |            --             |
| **Density** (g/cm<sup>3</sup>, average)  |          1.408&#x2009;g/cm<sup>3</sup>           |       0.255 Earths        |

### In the telescope

---
<span style='float:right;'>[top](#)</span>

### Sun Information

---
<span style='float:right;'>[top](#)</span>

1.  Latin name of the Sun is Sol, from which we get the name Solar System.

2.  At the core, the temperature is about 27 million degrees Fahrenheit (15 million degrees Celsius), which is sufficient to sustain thermonuclear fusion.

3.  The temperature drops below 3.5 million degrees Fahrenheit (2 million degrees Celsius) in the convective zone, where large bubbles of hot plasma (a soup of ionized atoms) move upwards.

4.  Energy from the core is carried outward by radiation, which bounces around the radiative zone, taking about 170,000 years to get from the core to the top of the convective zone.

5.  The surface of the Sun, the photosphere, the part we can see, is about 10,000 degrees Fahrenheit (5,500 degrees Celsius). That's much cooler than the blazing core, but it's still hot enough to make carbon, like diamonds and graphite, not just melt, but boil.

6.  Sunlight travelling towards Earth, takes about eight minutes to arrive.

7.  The Sun accounts for 99.8% of the mass of the entire solar system.

8.  Since the Sun is not a solid body, different parts of the Sun rotate at different rates. At the equator, the Sun spins around once about every 25 days, but at its poles the Sun rotates once on its axis every 36 Earth days.

9.  Its nearest stellar neighbor is the Alpha Centauri triple star system: Proxima Centauri which is 4.24 light years away, and Alpha Centauri A and B: two stars orbiting each other—are 4.37 light years away.

10. Our solar system is moving with an average velocity of 450,000 miles per hour. But even at this speed, it takes us about 230 million years to make one complete orbit around the Milky Way.

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   | 
| -------- | ----------- | --------------------------------------------------------- |
| **Item** | **Updated** | **Notes**                                                 |
| Overview | 2018-11-12  | <https://solarsystem.nasa.gov/solar-system/sun/overview/> |
</details>
