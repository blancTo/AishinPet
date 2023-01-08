window.addEventListener('message', function(e) {
    var iframe = $("#parentframe");
    var eventName = e.data[0];
    var data = e.data[1];
    switch(eventName) {
        case 'setHeight':
            iframe.height(data);
            break;
        }
    }, false);