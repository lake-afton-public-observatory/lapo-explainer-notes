function closest_below(table, index) {
  arr = Object.keys(table).map(function(x) {
    return parseInt(x);
  });
  var curr = arr[0];
  var diff = Math.abs(index - curr);
  for (var i = 0; i < arr.length; i++) {
    var newDiff = Math.abs(index - arr[i]);
    if (arr[i] < index && newDiff < diff) {
      diff = newDiff;
      curr = arr[i];
    }
  }
  return curr;
}
function closest_above(table, index) {
  arr = Object.keys(table).map(function(x) {
    return parseInt(x);
  });
  var curr = arr[0];
  var diff = Math.abs(index - curr);
  for (var i = 0; i < arr.length; i++) {
    var newDiff = Math.abs(index - arr[i]);
    if (arr[i] > index && newDiff < diff) {
      diff = newDiff;
      curr = arr[i];
    }
  }
  return curr;
}
function au_to_km(value) {
  // astronomical unit to kilometer
  return value * 149597870.7;
}
function au_to_mi(value) {
  // astronomical unit to mile
  return (value * 149597870.7) / 1.609344;
}
function au_to_ls(value) {
  // astronomical unit to light-second
  return (value * 149597870700) / 299792458;
}
Number.prototype.numberFormat = function(decimals, dec_point, thousands_sep) {
  dec_point = typeof dec_point !== 'undefined' ? dec_point : '.';
  thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';
  var parts = this.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);
  return parts.join(dec_point);
};
Number.prototype.timeFormat = function() {
  d = Number(this);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = (d % 60).numberFormat(3);
  return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
    .filter(a => a)
    .join(':');
};
function interpolate(table, index) {
  var x0 = closest_below(table, index);
  var x1 = closest_above(table, index);
  var y0 = table[x0];
  var y1 = table[x1];
  var y = y0 + ((index - x0) * (y1 - y0)) / (x1 - x0);
  return y;
}
