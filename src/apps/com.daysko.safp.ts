// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "7天澳門統考",
  "id": "com.daysko.safp",
  "groups": [
    {
      "name": "全屏广告-谷歌广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "View > [text=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642909",
            "https://i.gkd.li/i/12643316"
          ]
        },
        {
          "matches": "[id=\"adchoiceWrap\"] + [id=\"mv_close_btn\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12643032"
        },
        {
          "matches": "View[clickable=false][childCount=2] > TextView[clickable=true] + View[clickable=true][childCount=1] > Button[clickable=true]",
          "key": 2,
          "name": "右上角白色圆形背景黑色x关闭按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12643039",
            "https://i.gkd.li/i/12643246"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-视频广告",
      "desc": "点击跳过视频-点击关闭按钮",
      "key": 1,
      "rules": [
        {
          "matches": "[id=null][text=\"跳过视频\"] < View +(2) @View > Button[clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12668269",
            "https://i.gkd.li/i/12642913",
            "https://i.gkd.li/i/12642932"
          ]
        },
        {
          "matches": [
            "Button[id=null][clickable=true] < @View - * < View - View >(n) View[desc=\"安装\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642952",
            "https://i.gkd.li/i/12668298"
          ]
        },
        {
          "matches": [
            "[desc=\"了解详情\"] - View > [text=\"关闭\"]"
          ],
          "actionCd": 2500,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642983"
          ]
        }
      ]
    },
    {
      "name": "局部广告-页面底部广告",
      "key": 2,
      "rules": [
        {
          "matches": "[!(id=\"why_this_ad_btn\")] -2 View[id=\"mys-wrapper\"] + View >2 Button[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642993",
            "https://i.gkd.li/i/12643229"
          ],
          "key": 0
        },
        {
          "matches": "View[desc=\"Advertisement\"] + View >(2) Button",
          "snapshotUrls": [
            "https://i.gkd.li/i/12643001"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-谷歌广告-全屏广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View > [text=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642909",
            "https://i.gkd.li/i/12643316"
          ]
        },
        {
          "matches": "[id=\"adchoiceWrap\"] + [id=\"mv_close_btn\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12643032"
        },
        {
          "matches": "View[clickable=false][childCount=2] > TextView[clickable=true] + View[clickable=true][childCount=1] > Button[clickable=true]",
          "key": 2,
          "name": "右上角白色圆形背景黑色x关闭按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12643039",
            "https://i.gkd.li/i/12643246"
          ]
        }
      ]
    },
    {
      "name": "未分类-谷歌广告-视频广告",
      "desc": "点击跳过视频-点击关闭按钮",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=null][text=\"跳过视频\"] < View +(2) @View > Button[clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12668269",
            "https://i.gkd.li/i/12642913",
            "https://i.gkd.li/i/12642932"
          ]
        },
        {
          "matches": [
            "Button[id=null][clickable=true] < @View - * < View - View >(n) View[desc=\"安装\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642952",
            "https://i.gkd.li/i/12668298"
          ]
        },
        {
          "matches": [
            "[desc=\"了解详情\"] - View > [text=\"关闭\"]"
          ],
          "actionCd": 2500,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642983"
          ]
        }
      ]
    },
    {
      "name": "未分类-谷歌广告-页面底部广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id!=\"why_this_ad_btn\"] -2 View[id=\"mys-wrapper\"] + View >2 Button[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642993",
            "https://i.gkd.li/i/12643229"
          ],
          "key": 0
        },
        {
          "matches": "View[desc=\"Advertisement\"] + View >(2) Button",
          "snapshotUrls": [
            "https://i.gkd.li/i/12643001"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-谷歌广告-视频广告",
      "desc": "点击跳过视频-点击关闭按钮",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=null][text=\"跳过视频\"] < View +(2) @View > Button[clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12668269",
            "https://i.gkd.li/import/12642913",
            "https://i.gkd.li/import/12642932"
          ]
        },
        {
          "matches": [
            "Button[id=null][clickable=true] < @View - * < View - View >(n) View[desc=\"安装\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642952",
            "https://i.gkd.li/import/12668298"
          ]
        },
        {
          "matches": [
            "[desc=\"了解详情\"] - View > [text=\"关闭\"]"
          ],
          "actionCd": 2500,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642983"
          ]
        }
      ]
    },
    {
      "name": "局部广告-谷歌广告-页面底部广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id!=\"why_this_ad_btn\"] -2 View[id=\"mys-wrapper\"] + View >2 Button[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642993",
            "https://i.gkd.li/import/12643229"
          ],
          "key": 0
        },
        {
          "matches": "View[desc=\"Advertisement\"] + View >(2) Button",
          "snapshotUrls": [
            "https://i.gkd.li/import/12643001"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "谷歌广告-全屏广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "View > [text=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642909",
            "https://i.gkd.li/import/12643316"
          ]
        },
        {
          "matches": "[id=\"adchoiceWrap\"] + [id=\"mv_close_btn\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12643032"
        },
        {
          "matches": "View[clickable=false][childCount=2] > TextView[clickable=true] + View[clickable=true][childCount=1] > Button[clickable=true]",
          "key": 2,
          "name": "右上角白色圆形背景黑色x关闭按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12643039",
            "https://i.gkd.li/import/12643246"
          ]
        }
      ]
    },
    {
      "name": "谷歌广告-视频广告",
      "desc": "点击跳过视频-点击关闭按钮",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=null][text=\"跳过视频\"] < View +(2) @View > Button[clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12668269",
            "https://i.gkd.li/import/12642913",
            "https://i.gkd.li/import/12642932"
          ]
        },
        {
          "matches": [
            "Button[id=null][clickable=true] < @View - * < View - View >(n) View[desc=\"安装\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642952",
            "https://i.gkd.li/import/12668298"
          ]
        },
        {
          "matches": [
            "[desc=\"了解详情\"] - View > [text=\"关闭\"]"
          ],
          "actionCd": 2500,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642983"
          ]
        }
      ]
    },
    {
      "name": "谷歌广告-页面底部广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id!=\"why_this_ad_btn\"] -2 View[id=\"mys-wrapper\"] + View >2 Button[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642993",
            "https://i.gkd.li/import/12643229"
          ],
          "key": 0
        },
        {
          "matches": "View[desc=\"Advertisement\"] + View >(2) Button",
          "snapshotUrls": [
            "https://i.gkd.li/import/12643001"
          ],
          "key": 1
        }
      ]
    }
  ]
});
