// Barras Circulares
// Solo se pueden crear 5 graficas

circularChart({el: '#circular-chart-1', data: '60', color: '#ff9f00'});
circularChart({el: '#circular-chart-2', data: '80', color: '#4cc790'});
circularChart({el: '#circular-chart-3', data: '40', color: '#3c9ee5'});
circularChart({el: '#circular-chart-4', data: '26', color: '#dc3545'});
circularChart({el: '#circular-chart-5', data: '100', color: '#6f42c1'});
circularChart({el: '#circular-chart-6', data: '35', color: '#6f42c8'});


function circularChart(options = {}) {
    let draw = SVG().addTo(options.el).attr("viewBox", '0 0 90 90');
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a  15.9155 15.9155 0 0 1 0 -31.831").addClass("background");
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831").addClass("foreground").attr("stroke-dasharray", options.data+', 100').stroke(options.color);

    draw.plain(options.data+"%").attr('x', '18').attr('y', '20.35').addClass('percentage');
    
}