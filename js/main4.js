circular({el: '#circular-chart1', data: '60', color: '#ff9f00'});
circular({el: '#circular-chart2', data: '80', color: '#4cc790'});
circular({el: '#circular-chart3', data: '40', color: '#3c9ee5'});
circular({el: '#circular-chart4', data: '26', color: '#dc3545'});
circular({el: '#circular-chart5', data: '100', color: '#6f42c1'});


function circular(options = {}) {
    let draw = SVG().addTo(options.el).attr("viewBox", '0 0 90 90');
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a  15.9155 15.9155 0 0 1 0 -31.831").addClass("background");
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831").addClass("foreground").attr("stroke-dasharray", options.data+', 100').stroke(options.color);

    draw.plain(options.data+"%").attr('x', '18').attr('y', '20.35').addClass('percentage');
    
}

