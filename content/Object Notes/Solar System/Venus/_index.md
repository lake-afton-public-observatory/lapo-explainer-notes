---
title: Venus
weight: 2
lastmod: "2022-08-21"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/notes/js/whatsup.js"></script>
<script src="/notes/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="Venus"
	var objectDesc ="Earth's Closest Planetary Neighbor"
	var objectImage="venus.png"
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Venus.sun_distance,d.valueOf()/1000);
				document.getElementById("dist_sun").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_sun_au").innerText=v.numberFormat(3);
				var v=interpolate(data.Venus.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_earth").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

Information about the planet Venus.

|                                   |                                         |                                          |
| --------------------------------- | :-------------------------------------: | :--------------------------------------: |
|                                   |             <br/>**Actual**             |        **Compared<br/>to Earth**         |
| **Distance from Sun** (average)   |            67 million miles             |                   0.72                   |
| **Distance from Sun** (current)   |  <span id="dist_sun">loading...</span>  | <span id="dist_sun_au">loading...</span> |
| **Distance from Earth** (current) | <span id="dist_earth">loading...</span><br /><span id="dist_earth_light">loading...</span> |                    --                    |
| **Revolution Period**             |                225 days                 |                   0.62                   |
| **Rotation Period** (backwards)   |           243 days retrograde           |                    --                    |
| **Diameter**                      |               7,500 miles               |                   0.95                   |
| **Mass**                          |                   --                    |                   0.82                   |
| **Surface Gravity**               |                   --                    |                   0.90                   |
| **Temperature** Cloud Tops        |         460 &deg;C (850 &deg;F)         |                                          |
| **Density** (gram/cubic cm)       |               5.24 gm/cm3               |                   0.95                   |

### In the telescope

---
<span style='float:right;'>[top](#)</span>

1. Recommended eyepiece: 26mm or 40 mm.

2. Venus is usually so bright that you may wish to use the mask over the front of the telescope.

3. Since Venus goes through phases like the moon, it can appear as a thin crescent to almost full.

4. You are unable to see any features in the clouds on Venus.

### Venus Information

---
<span style='float:right;'>[top](#)</span>

1. Venus goes through phases like our moon.

   a. Venus orbits closer to the sun than we do, so it can be: between the Earth and the Sun; on the other side of the Sun than Earth; or off to the “side” making a triangle with the Sun and Earth.

   b. We cannot see Venus in its full phase: it is on the other side of the Sun from Earth, and either the Sun is in the way, or the glare from the Sun prevents the planet from being seen.

   c. We cannot see Venus in its “new” phase: it is between us and the Sun, so the glare from the Sun prevents the planet from being seen.

2. The very dense atmosphere of Venus is made of carbon dioxide.

   a. Carbon dioxide is the same gas humans breathe out, and the same gas that makes soda fizz.

   b. No surface features can be seen (optically) through this atmosphere. This is why only a white ball can be seen through the telescope.

   c. The dense atmosphere results in the greenhouse effect. Sunlight can get through the clouds, heating up the planet. However, heat rising from the surface cannot get through the atmosphere, so the heat is trapped. This produces the 900 ºF surface temperatures on Venus.

   d. Because the atmosphere is so thick, the air pressure at the surface of Venus is 90 times the air pressure at the surface of Earth. If you were on Venus, you would be squashed like a bug.

   e. In fact, spacecraft that have landed on Venus have only lasted a few hours before being crushed.

3. The surface of Venus has boulders, craters, lava flows, mysterious bright material, and the remains of volcanoes.

   a. Radar observations – which can “see” through clouds – show that Venus has two continent sized plateaus on its surface.

   b. Russian spacecraft that have landed on the surface show it to be covered with boulders.

   c. There are craters scattered over the surface of Venus. However, there are few small craters: smaller meteorites would have burned up in the dense atmosphere.

   d. Huge lava flows, extending for hundreds of miles, flooded the lowlands creating vast plains.

   e. Radar images of highland areas are very bright. Possible explanations include the material being iron pyrite (“fool’s gold”) or some type of exotic material.

   f. No volcanoes are currently active on Venus. However, in the past, they played a part in shaping the planet’s surface.

4. Liquid water does not exist on Venus.

5. Venus actually spins backwards as it goes around this Sun: if you could safely stay on Venus, the Sun would rise in the west and set in the east.

6. Venus and Earth are often called sister planets for their similarity in size, mass, density. However, when it comes to their temperatures, existence of water, atmosphere, and air pressure, the two planets are very, very different.

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   | 
| ----------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| **Item**          | **Updated** | **Notes**                                                                                                  |
| Distance from Sun | 2017-05-07  | <https://solarsystem.nasa.gov/planets/venus/facts>                                                         |
| Revolution Period | 2017-05-07  | OK                                                                                                         |
| Rotation Period   | 2017-05-07  | OK                                                                                                         |
| Diameter          | 2017-05-07  | OK                                                                                                         |
| Mass              | 2017-05-07  | OK                                                                                                         |
| Surface Gravity   | 2017-05-07  | OK                                                                                                         |
| Temperature       | 2017-05-07  | OK                                                                                                         |
| Density           | 2017-05-07  | OK                                                                                                         |
| Other Information | 2017-05-07  | <http://solarviews.com/eng/venus.htm><br/><https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html> |
</details>
