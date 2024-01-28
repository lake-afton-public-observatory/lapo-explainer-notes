---
title: Mercury
weight: 2
lastmod: "2022-08-21"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/notes/js/whatsup.js"></script>
<script src="/notes/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="Mercury"
	var objectDesc ="Closest Planet to the Sun"
	var objectImage="mercury.jpg"
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Mercury.sun_distance,d.valueOf()/1000);
				document.getElementById("dist_sun").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_sun_au").innerText=v.numberFormat(3);
				var v=interpolate(data.Mercury.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_earth").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

Information about the planet Mercury.

|                                   |                                         |                                          |
| --------------------------------- | :-------------------------------------: | :--------------------------------------: |
|                                   |             <br/>**Actual**             |        **Compared<br/>to Earth**         |
| **Distance from Sun** (average)   |            36 million miles             |                   0.39                   |
| **Distance from Sun** (current)   |  <span id="dist_sun">loading...</span>  | <span id="dist_sun_au">loading...</span> |
| **Distance from Earth** (current) | <span id="dist_earth">loading...</span><br /><span id="dist_earth_light">loading...</span> |                    --                    |
| **Revolution Period**             |                 88 days                 |                   0.24                   |
| **Rotation Period**               |                58.6 days                |                    --                    |
| **Diameter**                      |               3,032 miles               |                   0.38                   |
| **Diameter** - polar              |              83,000 miles               |                   10.5                   |
| **Mass**                          |                   --                    |                  0.055                   |
| **Surface Gravity**               |                   --                    |                   0.38                   |
| **Surface Temperature** – Average |           -297 to 801 &deg;F            |                                          |
| **Density** (gram/cubic cm)       |              5.427 gm/cm3               |                  0.984                   |

### In the telescope

---
<span style='float:right;'>[top](#)</span>

1. Recommended eyepiece: 26mm or 40 mm.

2. Since Mercury goes through phases like the moon, it will appear as a crescent.

### Mercury Information

---
<span style='float:right;'>[top](#)</span>

1. Mercury goes through phases like Venus and our moon.

   a. Mercury orbits closer to the sun than we do, so it can be: between the Earth and the Sun; on the other side of the Sun than Earth; or off to the “side” making a triangle with the Sun and Earth.

   b. We cannot see Mercury in its full phase: it is on the other side of the Sun from Earth, and either the Sun is in the way, or the glare from the Sun prevents the planet from being seen.

   c. We cannot see Mercury in its “new” phase: it is between us and the Sun, so the glare from the Sun prevents the planet from being seen.

2. Mercury is a planet of extremes.

   a. Mercury is the smallest planet of the eight in our solar system. If Earth were represented by a baseball, Mercury would be the size of a golf ball.

   b. Mercury is the closest planet to the Sun. Imagine looking up at a Sun that is almost three times larger than the one we see here on Earth.

   c. Mercury has the largest daily variation in surface temperature at about 1,200 degrees fahrenheit!

   d. Mercury is the second densest planet in our solar system after Earth.

   e. Mercury has the oldest surface of any planet in our solar system. After the first ½ billion years, the crust cooled, contracted and became strong enough to prevent magma from reaching the surface, ending its period of geologic activity.

   f. Mercury is the fastest planet in our solar system going around the Sun every 88 days speeding through space at 31 miles per second, faster than any other planet.

   g. Mercury’s orbital plane is inclined at 7 degrees - more than twice that of Venus which has the second most tilted orbital plane at 3.39 degrees.

   h. Mercury has the most eccentric (elliptical) orbit of any planet in our solar system with an eccentricity of 0.206 - more than twice as eccentric as Mars. This means that it gets as close as 28.6 million miles from the sun and as far away as 43.4 million miles from the sun.

3. Mercury has almost no atmosphere at all.

   a. Because there is almost no air (atmosphere) to hold in the heat when the Sun is not shining, temperature extremes between day and night are extreme - as much as 1,169 degrees fahrenheit!

   b. The hottest temperature on Mercury can reach as high as 870 degrees fahrenheit - hot enough to melt lead! The lowest temperature on Mercury can reach as low as -297 degrees fahrenheit below zero!

   c. Since there is no atmosphere, meteors do not burn up so Mercury is covered with craters and looks a lot like our moon.

4. Scientists believe that frozen water may exist on Mercury in deep craters near the north and south poles that are perpetually dark (-250 degrees fahrenheit).

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   | 
| ----------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| **Item**          | **Updated** | **Notes**                                                                                                       |
| Distance from Sun | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Revolution Period | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Rotation Period   | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Diameter          | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Mass              | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Surface Gravity   | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Temperature       | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Density           | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts>                                                            |
| Other Information | 2017-05-04  | <https://solarsystem.nasa.gov/planets/mercury/facts><br/><http://www.windows2universe.org/mercury/mercury.html> |
</details>
