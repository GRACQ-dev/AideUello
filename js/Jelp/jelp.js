var jelp = function () {
	var markers_hover_images = {},
        markers = {};
        generic_icon_name = 'js/Jelp/img/arrow_';
        generic_icon_type = '.png';
        icon_width = 70;


    function init(img_class_name, trigger_class_name, generic_icon_name_arg, icon_size_arg, generic_icon_type_arg) {
        if (generic_icon_name_arg) {
            generic_icon_name = generic_icon_name_arg;
        }

        if (icon_size_arg) {
            icon_size = icon_size_arg;
        }

        if (generic_icon_type_arg) {
            generic_icon_type = generic_icon_type_arg;
        }

        $('.' + img_class_name).each(function() {
            init_img_container(this);
        });

        init_trigger_for_class(trigger_class_name);
    }

    function init_img_container(img_arg) {
        var img, 
            img_width,
            img_height,
            img_container,
            markers,
            i,
            max;

        img = $(img_arg);

        // taille précisée dans jelp
        if (img.attr('data-jelp-img-width')) {
            img_width = img.attr('data-jelp-img-width');
            if(img_width.slice(-2) === 'px') {
                img_width = parseInt(img_width.slice(0,-2));
            }
            img_width = parseInt(img_width)
            img.width(img_width);
        }
        else {
            img_width = img.width();
        }

        img_height = $(img).height();
        img_container = $(img).wrap('<div class="img_container" />').parent();
        img_container
            .width(img_width)
            .height(img_height)
            .css({ 
                position: 'relative'
            }); 

        if (img.attr('data-jelp-markers')) {
            markers_json = JSON.parse(img.attr('data-jelp-markers'));
            for (i = 0, max = markers_json.length; i < max; i++) {
                add_marker(img_container, markers_json[i])
            }
        }
    }

    function add_marker(img_container_arg, marker_json) {
        var img_container,
            marker,
            label_container,
            hover_icon_url,
            icon_url,
            icon_img,
            icon_height,
            icon_container,
            label_container,
            top,
            left;

        img_container = $(img_container_arg);
        icon_img_normal = $('<img src="' + generic_icon_name + marker_json.color + generic_icon_type + '" />');
        img_container.append(icon_img_normal);
        icon_img_normal.attr('id', marker_json.id + '_img_normal');

        icon_img_normal.width(icon_width);
        icon_height = icon_img_normal.height();

        icon_container = icon_img_normal.wrap('<div class="marker_container" />').parent();
        icon_container.width(icon_width)
            .height(icon_height);
        icon_container.attr('id', marker_json.id);


        icon_img_hover = $('<img src="' + generic_icon_name + marker_json.hover_color + generic_icon_type + '" />');
        icon_container.append(icon_img_hover);
        icon_img_hover.hide();
        icon_img_hover.attr('id', marker_json.id + '_img_hover');
        icon_img_hover.width(icon_width);

        
        label_container = $('<div />').append(marker_json.label);

        label_container
            .addClass('jelp_label_container')
            .addClass('jelp_marker_label');
        icon_container.append(label_container);

        // check if top and left are 0.XXX -> pecentage
        if(parseFloat(marker_json.y) % 1 !== 0 && parseInt(marker_json.y) === 0) {
            top = (parseFloat(img_container.height()) * parseFloat(marker_json.y)) - (parseFloat(icon_img_normal.height()) / 2) ;
        }
        else {
            top = marker_json.y
        }

        if(parseFloat(marker_json.x) % 1 !== 0 && parseInt(marker_json.x) === 0) {
            left = parseFloat(img_container.width()) * parseFloat(marker_json.x) -  (parseFloat(icon_img_normal.width()));
        }
        else {
            left = marker_json.x;
        }

        icon_container.css({ 
            left: left, 
            top: top
        })
            .addClass('jelp_marker')
            .attr('id', marker_json.id);
    }

    function init_trigger_for_class(trigger_class_name) {
        $('.' + trigger_class_name).each(function() {
            var trigger = $(this);
            var marker = $('#' + trigger.attr('data-marker')); 
            var marker_img_normal = $('#' + trigger.attr('data-marker') + '_img_normal');
            var marker_img_hover = $('#' + trigger.attr('data-marker') + '_img_hover'); 
            var label_container = marker.find('div.jelp_marker_label');
            var label = label_container.text();

            trigger.append(" (" + label + ")");

            var marker_normal_url_img = marker_img_normal.attr("src");
            var marker_hover_url_img = marker_img_hover.attr("src");

            function marker_activate() {
                marker_img_normal.hide();
                marker_img_hover.show();
                trigger.removeClass('jelp_trigger');
                label_container.removeClass('jelp_marker_label');
                trigger.addClass('jelp_trigger_select');
                label_container.addClass('jelp_marker_label_select');
            }

            function marker_unactivate() {
                marker_img_normal.show();
                marker_img_hover.hide();
                trigger.removeClass('jelp_trigger_select');
                label_container.removeClass('jelp_marker_label_select');
                trigger.addClass('jelp_trigger');
                label_container.addClass('jelp_marker_label');
            }

            trigger.hover(marker_activate, marker_unactivate);
            trigger.addClass('jelp_trigger');
        });    
    }

	return {
		init: init,
		add_marker: add_marker,
        init_trigger_for_class: init_trigger_for_class
	}
}();
