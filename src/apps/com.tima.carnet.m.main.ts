// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "钛马星",
  "id": "com.tima.carnet.m.main",
  "groups": [
    {
      "name": "全屏广告-每日弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"今天内不显示\"][checked=false]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12654432",
            "https://i.gkd.li/i/13507746",
            "https://i.gkd.li/i/13508074",
            "https://i.gkd.li/i/13508041"
          ],
          "exampleUrls": "https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d"
        },
        {
          "matches": "@ImageButton[clickable=true] - [text=\"今天内不显示\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12654432",
            "https://i.gkd.li/i/13507746",
            "https://i.gkd.li/i/13508074",
            "https://i.gkd.li/i/13508041"
          ],
          "exampleUrls": "https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d"
        },
        {
          "matches": [
            "CheckBox[id$=\"today_will_not_shown\"] + ImageButton[clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12654432",
            "https://i.gkd.li/import/13507746",
            "https://i.gkd.li/import/13508074",
            "https://i.gkd.li/import/13508041"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-设备界面顶部广告",
      "key": 1,
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true] < View[childCount=1] + View >2 [visibleToUser=true][text=\"广告\"] <<n [id=\"com.tima.carnet.m.main:id/fl_ad_banner\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13508030",
            "https://i.gkd.li/i/13508115"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            3
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13508102"
        },
        {
          "matches": "ListView[id=\"com.byted.pangle:id/tt_filer_words_lv\"][childCount=0]",
          "action": "back",
          "preKeys": [
            3
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13508072"
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true] < View[childCount=1] + View >2 [visibleToUser=true][text=\"广告\"] <<n [vid=\"fl_ad_banner\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13508030",
            "https://i.gkd.li/i/13508115"
          ]
        }
      ]
    },
    {
      "name": "未分类-每日弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": [
            "CheckBox[id$=\"today_will_not_shown\"] + ImageButton[clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12654432",
            "https://i.gkd.li/i/13507746",
            "https://i.gkd.li/i/13508074",
            "https://i.gkd.li/i/13508041"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-设备界面顶部广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] < View +n View > Image",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13508030"
          ]
        },
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] + View > Image",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13508115"
          ]
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13508102"
          ]
        },
        {
          "matches": "ListView[childCount=0]",
          "action": "back",
          "preKeys": [
            0,
            1
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13508072"
          ]
        }
      ]
    },
    {
      "name": "局部广告-设备界面顶部广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] < View +n View > Image",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508030"
          ]
        },
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] + View > Image",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508115"
          ]
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508102"
          ]
        },
        {
          "matches": "ListView[childCount=0]",
          "action": "back",
          "preKeys": [
            0,
            1
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508072"
          ]
        }
      ]
    },
    {
      "name": "每日弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": [
            "CheckBox[id$=\"today_will_not_shown\"] + ImageButton[clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12654432",
            "https://i.gkd.li/import/13507746",
            "https://i.gkd.li/import/13508074",
            "https://i.gkd.li/import/13508041"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "设备界面顶部广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] < View +n View > Image",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508030"
          ]
        },
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] + View > Image",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508115"
          ]
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508102"
          ]
        },
        {
          "matches": "ListView[childCount=0]",
          "action": "back",
          "preKeys": [
            0,
            1
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/13508072"
          ]
        }
      ]
    }
  ]
});
