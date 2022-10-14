
cir({el: '#circular-char1', data: '54', color: '#ff9f00'});
cir({el: '#circular-char2', data: '88', color: '#4cc790'});
cir({el: '#circular-char3', data: '67', color: '#3c9ee5'});
cir({el: '#circular-char4', data: '87', color: '#dc3545'});
cir({el: '#circular-char5', data: '100', color: '#6f42c1'});


function cir(options = {}) {
    let draw = SVG().addTo(options.el).attr("viewBox", '0 0 90 90');
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a  15.9155 15.9155 0 0 1 0 -31.831").addClass("background");
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831").addClass("foreground").attr("stroke-dasharray", options.data+', 100').stroke(options.color);

    draw.plain(options.data+"%").attr('x', '18').attr('y', '20.35').addClass('percentage');
    
}