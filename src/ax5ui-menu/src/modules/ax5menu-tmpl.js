// ax5.ui.menu.tmpl
/*
 FB_A : B 기능 개발 <- v0.2에 들어갈 장기 기능이다.
 FB_A : B 기능 개발 중
 FB_A : B 기능 개발 완료

 ###########################################
  Git flow workflow

  develop : 상용이 필요한 기능 개발 A commit
  develop : 상용 기능 개발 E 개발 commit
  featureA : v0.5에 들어갈 기능 개발 A commit
  featureA : v0.5에 들어갈 기능 개발 B commit

  ----------------------
  release : v0.5 기능 개선 B
  ----------------------

  featureB : v1.0 사용 기능 장기 개발 B
  featureB : v1.0 사용 기능 장기 개발 C

  ----------------------
  release v1.0
  ----------------------

  esteban develop : janghoon conflict 유도 commit D1 ==> 15:25
 */
(function () {
    var MENU = ax5.ui.menu;
    
    var tmpl = function (columnKeys) {
        return `
        <div class="ax5-ui-menu {{theme}}" {{#width}}style="width:{{width}}px;"{{/width}}>
            <div class="ax-menu-body">
                {{#${columnKeys.items}}}
                    {{^@isMenu}}
                        {{#divide}}
                        <div class="ax-menu-item-divide" data-menu-item-index="{{@i}}"></div>
                        {{/divide}}
                        {{#html}}
                        <div class="ax-menu-item-html" data-menu-item-index="{{@i}}">{{{@html}}}</div>
                        {{/html}}
                    {{/@isMenu}}
                    {{#@isMenu}}
                    <div class="ax-menu-item" data-menu-item-depth="{{@depth}}" data-menu-item-index="{{@i}}" data-menu-item-path="{{@path}}.{{@i}}">
                        <span class="ax-menu-item-cell ax-menu-item-checkbox">
                            {{#check}}
                            <span class="item-checkbox-wrap useCheckBox" {{#checked}}data-item-checked="true"{{/checked}}></span>
                            {{/check}}
                            {{^check}}
                            <span class="item-checkbox-wrap"></span>
                            {{/check}}
                        </span>
                        {{#icon}}
                        <span class="ax-menu-item-cell ax-menu-item-icon" style="width:{{cfg.iconWidth}}px;">{{{.}}}</span>
                        {{/icon}}
                        <span class="ax-menu-item-cell ax-menu-item-label">{{{${columnKeys.label}}}}</span>
                        {{#accelerator}}
                        <span class="ax-menu-item-cell ax-menu-item-accelerator" style="width:{{cfg.acceleratorWidth}}px;"><span class="item-wrap">{{.}}</span></span>
                        {{/accelerator}}
                        {{#@hasChild}}
                        <span class="ax-menu-item-cell ax-menu-item-handle">{{{cfg.icons.arrow}}}</span>
                        {{/@hasChild}}
                    </div>
                    {{/@isMenu}}

                {{/${columnKeys.items}}}
            </div>
            <div class="ax-menu-arrow"></div>
        </div>
        `;
    };
    var tmplMenubar =  function (columnKeys) {
        return `
        <div class="ax5-ui-menubar {{theme}}">
            <div class="ax-menu-body">
                {{#${columnKeys.items}}}
                    {{^@isMenu}}
                        {{#divide}}
                        <div class="ax-menu-item-divide" data-menu-item-index="{{@i}}"></div>
                        {{/divide}}
                        {{#html}}
                        <div class="ax-menu-item-html" data-menu-item-index="{{@i}}">{{{@html}}}</div>
                        {{/html}}
                    {{/@isMenu}}
                    {{#@isMenu}}
                    <div class="ax-menu-item" data-menu-item-index="{{@i}}">
                        {{#icon}}
                        <span class="ax-menu-item-cell ax-menu-item-icon" style="width:{{cfg.iconWidth}}px;">{{{.}}}</span>
                        {{/icon}}
                        <span class="ax-menu-item-cell ax-menu-item-label">{{{${columnKeys.label}}}}</span>
                    </div>
                    {{/@isMenu}}
                {{/${columnKeys.items}}}
            </div>
        </div>
        `;
    };

    MENU.tmpl = {
        "tmpl" : tmpl,
        "tmplMenubar" : tmplMenubar,

        get: function (tmplName, data, columnKeys) {
            return ax5.mustache.render(MENU.tmpl[tmplName].call(this, columnKeys), data);
        }
    };
})();