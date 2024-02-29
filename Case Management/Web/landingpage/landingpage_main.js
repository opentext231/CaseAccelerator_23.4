$(document).ready(function () {
    var layoutPanel = peObject.apiWindow.document.getElementsByClassName("layout-panel")[0];
	if(layoutPanel){
	layoutPanel.style.border = "none";
	}
	var breadCrumbs = peObject.apiWindow.document.getElementsByClassName("breadcrumb-panel")[0]
	if(breadCrumbs){
		breadCrumbs.style.marginTop = "6px";
	}

    $(".col-sm-3").on("click", { data: this }, handleLayoutURL);
});

function handleLayoutURL(event) {
    var layoutName = $(this).find("h3").text();
    var url = "";
    switch (layoutName) {
        case "Case Management":
            url = "app/start/web/pages/00505601718DA1EB831596F0F01E5BFF";
            break;
        case "SLA Management":
            url = "app/start/web/pages/98FA9BBD851CA1EABFC71DB6A6D1996C";
            break;
        case "Task List Management":
            url = "app/start/web/pages/98FA9BBD851CA1EABFB6EF8BE04B596C";
            break;
        case "Team Management":
            url = "app/start/web/pages/98FA9BBD851CA1EABF960F7FCBDF996C";
            break;
        case "Documents":
            url = "app/start/web/pages/98FA9BBD851CA1EABF9845D9521D596C";
            break;
        case "Workflow Management":
            url = "app/start/web/pages/98FA9BBD851CA1EABFC32D8E0589D96C";
             break;
        case "Help Topics":
            url = "app/start/web/pages/98FA9BBD851CA1EB81B6CAB0DA42596C";
             break;
        case "Data Migration":
            url = "app/start/web/pages/74E5F965B29BA1E8B6CED67972594879";    
             break;
        default:
            //url = "";
    }
    // peObject.apiWindow.open(getContextBaseUrlWithAppMarker() + url, '_self');
	if(url){
		peObject.apiWindow.open(getContextBaseUrlWithAppMarker() + url);
	}
	 
}
function getContextBaseUrlWithAppMarker() {
    return '/' +  peObject.apiWindow.document.location.href.split('/').slice(3, 5).join('/') + '/'
}

var peObject = {};
(function () {
    var parent = window;
    while (parent.parent && parent != parent.parent) {
        parent = parent.parent;
    }
    peObject.initialized = true;
    peObject.isPEAvailable = false;
	var bodyEle =window.parent.document.body;
	if(!bodyEle){
	 peObject.apiWindow = parent;
	return peObject;
	}
	var itemState = window.parent.document.body.aurelia.container.viewModel.sSOService.itemState;
    if (itemState) {
        peObject.apiWindow = parent;
        peObject.itemManager = itemState;
        peObject.isPEAvailable = true;
    }

    peObject.listId = window.frameElement.getAttribute("listId"); //NOMBV
    peObject.breadcrumbId = window.frameElement.getAttribute("breadcrumbid"); //NOMBV
    if (peObject.breadcrumbId == null && window.parent && window.parent.frameElement)	//NOMBV
    {
        peObject.listId = window.parent.frameElement.getAttribute("listId"); //NOMBV
        peObject.breadcrumbId = window.parent.frameElement.getAttribute("breadcrumbId"); //NOMBV
    }
}());