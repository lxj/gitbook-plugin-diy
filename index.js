'use strict';

module.exports = {
  hooks: {
    init: function init() {
      var _this$config$get = this.config.get('pluginsConfig.chart')
    },
    "page:before": function pageBefore(page) {

	  console.log(page.content)

		page.content = page.content.replace(/([\n\s]*)\{([^}]+)\}\(([^)]+)\)(\s*(?:$|\n+))/g,function(mats,beginCharacter,type,url,endCharacter){
			console.log(mats,type,url)
			if(type === 'iframe'){
				return `${beginCharacter}<iframe id="iframe" width="100%" height="500" allowTransparency="true" src="${url}" frameborder="0" marginheight="0" marginwidth="0"></iframe>${endCharacter}`
			}
			return mats
		})
      return page;
	  
    }
  }
};
