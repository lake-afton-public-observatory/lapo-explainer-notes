---
title: Mars
weight: 4
lastmod: "2022-08-21"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/js/whatsup.js"></script>
<script src="/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="Mars"
	var objectDesc ="The Red Planet<br/><h5>(... and moons Deimos and Phobos)"
	var objectImage="mars.png"
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Mars.sun_distance,d.valueOf()/1000);
				document.getElementById("dist_sun").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_sun_au").innerText=v.numberFormat(3);
				var v=interpolate(data.Mars.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_earth").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

Information about the planet Mars.

|    |    |    |
| --------------------------------- | :----------------------------------------------------------------------------------------: | :--------------------------------------: |
|    |    <br/>**Actual**    |    **Compared<br/>to Earth**    |
| **Distance from Sun** (average)   | 140 million miles    |    1.5    |
| **Distance from Sun** (current)   | <span id="dist_sun">loading...</span>    | <span id="dist_sun_au">loading...</span> |
| **Distance from Earth** (current) | <span id="dist_earth">loading...</span><br /><span id="dist_earth_light">loading...</span> |    --    |
| **Revolution Period**    |    687 days    |    1.88    |
| **Rotation Period**    |    24 hr. 37 min.    |    1.026    |
| **Diameter**    |    4,200 miles    |    0.53    |
| **Diameter** - polar    |    83,000 miles    |    10.5    |
| **Mass**    |    --    |    0.11    |
| **Surface Gravity**    |    --    |    0.38    |
| **Surface Temperature** – Average |    -87 to -5 &deg;C<br/>(-125 to 23 &deg;F)    |    0.64 to 0.91    |
| **Density** (gram/cubic cm)    |    3.94 gm/cm3    |    0.71    |

### In the telescope

---
<span style='float:right;'>[top](#)</span>

1. Recommended eyepiece: 26mm or 40 mm.

2. Mars will appear as a reddish or orangish ball through the telescope.

3. Dark markings on the planet’s surface can be seen. These are the areas of the surface which are actually darker than the rest of the surface.

4. The whitish area near one edge of the planet is a polar cap.

### Mars Information

---
<span style='float:right;'>[top](#)</span>

1. Mars appears red because of iron-oxides in the soil.

2. The surface of Mars has canyons, craters, dried lake and river beds, polar caps, and volcanoes.

   a. The largest canyon on Mars, Valles Marineris, is 2480 miles long, and up to 6.25 miles deep. This system of canyons is 6 times deeper than the Grand Canyon and about as long as the continental United States!

   b. There are many craters on Mars. Parts of Mars have so many craters, they look like our Moon. The largest Martian crater is called Hellas basin and is 1430 miles across (almost half the size of the USA!).

   c. There are many dry lake beds and river channels on Mars. The question as to what happened to the water that made them remains unanswered. The best guess is that some sort of it is in the polar caps, while most of it is frozen in the ground. Some water may have been lost from the atmosphere.

   d. The polar caps of Mars are made up of two parts: an underlying layer of water ice, covered by a layer of frozen carbon dioxide (dry ice). When spring arrives in a hemisphere, the dry ice at that hemisphere’s pole evaporates, leaving behind the water ice.

   e. The largest volcanoes in the solar system are on Mars. The base of the largest volcano, Olympus Mons, is almost as large as Kansas. Olympus Mons rises 13 miles (21 km) above the surrounding plains. In contrast, Mount Everest, the tallest mountain on Earth, is only 5.5 miles (9 km) tall.

3. Like Earth, Mars is tilted on its axis, so Mars also has seasons. But seasons on Mars are roughly twice as long because it takes Mars twice as long to orbit the Sun.

4. Mars does have a thin atmosphere.

   a. The atmosphere of Mars is mostly carbon dioxide. There is no oxygen.

   b. The air pressure at the surface is only 1/100 the air pressure at the Earth’s surface. In other words, the air pressure at the surface of Mars is the same as the air pressure at an altitude of 100,000 feet on Earth.

   c. The air pressure depends on the season: during winter, 20 - 30% of the atmosphere freezes at the poles.

   d. Dust devils and dust storms are often seen on Mars. During the Martian southern-summer, huge dust storms can completely cover the planet for several months, blotting out the surface of Mars.

5. The temperature on Mars varies with time and altitude: if you were standing on Mars, your nose would be about 35 degrees F (20 ºC) colder than your feet! Heat from the Sun goes straight through the atmosphere to the ground, and warms the ground. Heat rising from the ground then heats the air.

6. The maximum recorded temperature on Mars is 68 ºF (20 ºC). The minimum recorded temperature is -220 &deg;F (-140 &deg;C).

7. Mars has two tiny irregularly shaped moons. Phobos is 17 miles (28 km) by 14 miles (20 km) while Deimos is 9 miles (15 km ) by 7 miles (12 km). There is a possibility that they are captured asteroids.

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   | 
| --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Item**    | **Updated** | **Notes**      |
| Distance from Sun    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Revolution Period    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Rotation Period    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Diameter    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Mass    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Surface Gravity    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Temperature – Average | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Density    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts>     |
| Other Information    | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mars/facts><br/><http://mars.jpl.nasa.gov/MPF/science/atmospheric.html><br/><http://www.solarviews.com/eng/mars.htm><br/><https://astrogeology.usgs.gov/solar-system/mars> |
</details>
