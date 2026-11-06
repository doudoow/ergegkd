// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "米游社",
  "id": "com.mihoyo.hyperion",
  "groups": [
    {
      "name": "功能类-自动打卡",
      "desc": "点击[打卡],切换板块自动签到",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/signTv\"][text=\"打卡\"][visibleToUser=true]",
          "activityIds": "com.mihoyo.hyperion.main.HyperionMainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13721772",
            "https://i.gkd.li/i/13721776"
          ],
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/signTv\"][text=\"打卡\"][visibleToUser=true]",
          "key": 1
        },
        {
          "matches": "TextView[vid=\"signTv\"][text=\"打卡\"][visibleToUser=true]",
          "activityIds": ".main.HyperionMainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13721772",
            "https://i.gkd.li/i/13721776"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-游戏版本活动",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"closeIv\"]",
          "activityIds": ".main.popup.HomePopupDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16818949",
          "exampleUrls": "https://e.gkd.li/5c54c1cc-95ae-420d-b3af-37e8553a6327",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-游戏版本活动",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"bottomBarBgIv\"] + * > [vid=\"close\"][clickable=true]",
          "key": 0,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/16996311"
        },
        {
          "matches": "[vid=\"rootLayout\"] > [vid=\"confirmTv\"][clickable=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击确定",
          "snapshotUrls": "https://i.gkd.li/i/16996319"
        }
      ]
    },
    {
      "name": "功能类-米游自动签到全家桶",
      "desc": "包含崩坏3、绝区零、原神、星穹铁道",
      "enable": false,
      "forcedTime": 10000,
      "key": 3,
      "rules": [
        {
          "anyMatches": [
            "WebView[text*=\"签到\"] >4 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0][text!=null]",
            "WebView[text*=\"签到\"] >4 View[childCount=10] > View + TextView[childCount=0][visibleToUser=true]"
          ],
          "excludeMatches": "[text^=\"请在此绑定你的\"][visibleToUser=true]",
          "key": 0,
          "name": "点击签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601269",
            "https://i.gkd.li/i/17601338",
            "https://i.gkd.li/i/17611619",
            "https://i.gkd.li/i/17611613",
            "https://i.gkd.li/i/14967627",
            "https://i.gkd.li/i/19586048",
            "https://i.gkd.li/i/19586142"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17601295",
            "https://i.gkd.li/i/17601347",
            "https://i.gkd.li/i/17611621",
            "https://i.gkd.li/i/19581359",
            "https://i.gkd.li/i/17611617",
            "https://i.gkd.li/i/19586048",
            "https://i.gkd.li/i/19586142",
            "https://i.gkd.li/i/19587714"
          ],
          "exampleUrls": "https://e.gkd.li/53d22dc7-b368-46c0-85d2-fe132b0832a9"
        },
        {
          "matches": "@TextView[visibleToUser=true][text=\"\"] - View[childCount=2] >2 [text*=\"签到成功\"]",
          "preKeys": [
            5
          ],
          "key": 1,
          "name": "关闭签到后的弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601273",
            "https://i.gkd.li/i/17601340",
            "https://i.gkd.li/i/17611620",
            "https://i.gkd.li/i/17611616",
            "https://i.gkd.li/i/14967631"
          ],
          "exampleUrls": "https://e.gkd.li/ef30277a-bd5d-444a-a9d5-ce63406d1269"
        },
        {
          "matches": "[text=\"不用了\"][visibleToUser=true]",
          "preKeys": [
            1
          ],
          "key": 2,
          "name": "关闭签到提醒",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601283",
            "https://i.gkd.li/i/17601345"
          ],
          "exampleUrls": "https://e.gkd.li/56299b94-01fb-4d83-9796-ec9bd6bbae64"
        },
        {
          "matches": "WebView[text*=\"签到\"] > View >3 View[index=0][childCount=1] > TextView[childCount=0][text=\"\"][visibleToUser=true]",
          "excludeMatches": "[text=\"不用了\"][visibleToUser=true]",
          "preKeys": [
            1,
            2
          ],
          "key": 3,
          "name": "从签到页返回",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601295",
            "https://i.gkd.li/i/17601347",
            "https://i.gkd.li/i/17611621",
            "https://i.gkd.li/i/17611617",
            "https://i.gkd.li/i/17629453"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17601283",
            "https://i.gkd.li/i/17601345"
          ],
          "exampleUrls": "https://e.gkd.li/cc68f623-5dc7-4703-9768-28826c4f16f6"
        },
        {
          "anyMatches": [
            "[getChild(0).getChild(1).text*=\"签到\"] + View >2 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0][text!=null]",
            "[getChild(0).getChild(1).text*=\"签到\"] + View >2 View[childCount=10] > View + TextView[childCount=0][visibleToUser=true]"
          ],
          "excludeMatches": "[text^=\"请在此绑定你的\"][visibleToUser=true]",
          "key": 4,
          "name": "点击签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601269",
            "https://i.gkd.li/i/17601338",
            "https://i.gkd.li/i/17611619",
            "https://i.gkd.li/i/17611613",
            "https://i.gkd.li/i/14967627",
            "https://i.gkd.li/i/19586048",
            "https://i.gkd.li/i/19586142",
            "https://i.gkd.li/i/34215019"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17601295",
            "https://i.gkd.li/i/17601347",
            "https://i.gkd.li/i/17611621",
            "https://i.gkd.li/i/19581359",
            "https://i.gkd.li/i/17611617",
            "https://i.gkd.li/i/19586048",
            "https://i.gkd.li/i/19586142",
            "https://i.gkd.li/i/19587714"
          ],
          "exampleUrls": "https://e.gkd.li/53d22dc7-b368-46c0-85d2-fe132b0832a9"
        },
        {
          "anyMatches": [
            "[text$=\"每日签到\"] >4 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0][text!=null]",
            "[text=\"《崩坏：星穹铁道》签到福利\"] >4 View > View + TextView[visibleToUser=true]"
          ],
          "key": 5,
          "name": "点击签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601269",
            "https://i.gkd.li/i/17601338",
            "https://i.gkd.li/i/17611619",
            "https://i.gkd.li/i/17611613",
            "https://i.gkd.li/i/14967627"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17601295",
            "https://i.gkd.li/i/17601347",
            "https://i.gkd.li/i/17611621",
            "https://i.gkd.li/i/17611617"
          ],
          "exampleUrls": "https://e.gkd.li/53d22dc7-b368-46c0-85d2-fe132b0832a9"
        },
        {
          "matches": "[text$=\"每日签到\" || text$=\"签到福利\"] > View >3 View[index=0][childCount=1] > TextView[childCount=0][text=\"\"][visibleToUser=true]",
          "excludeMatches": "[text=\"不用了\"][visibleToUser=true]",
          "preKeys": [
            1,
            2
          ],
          "key": 6,
          "name": "从签到页返回",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601295",
            "https://i.gkd.li/i/17601347",
            "https://i.gkd.li/i/17611621",
            "https://i.gkd.li/i/17611617",
            "https://i.gkd.li/i/17629453"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17601283",
            "https://i.gkd.li/i/17601345"
          ],
          "exampleUrls": "https://e.gkd.li/cc68f623-5dc7-4703-9768-28826c4f16f6"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text^=\"开启通知提醒\"]",
            "@[clickable=true] > [text$=\"拒绝\"]"
          ],
          "activityIds": ".main.HyperionMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24489020",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-原神自动签到",
      "desc": "点击签到-关闭弹窗-返回",
      "enable": false,
      "forcedTime": 5000,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"米游社原神每日签到\"] >4 View[childCount=11] > @View[childCount=3] > Image[index=0]",
          "key": 0,
          "name": "点击签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/14967627",
            "https://i.gkd.li/i/14371469"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e"
        },
        {
          "matches": "[text=\"米游社原神每日签到\"] >3 TextView[index=2][clickable=true]",
          "preKeys": 0,
          "key": 1,
          "name": "关闭签到后的弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14371439",
          "exampleUrls": "https://m.gkd.li/57941037/b02eca70-f7d3-4169-99d6-9906c534392a"
        },
        {
          "matches": "[text=\"米游社原神每日签到\"] - View > TextView[clickable=true]",
          "preKeys": 1,
          "key": 2,
          "name": "返回上一个页面",
          "snapshotUrls": "https://i.gkd.li/i/14371469",
          "exampleUrls": "https://m.gkd.li/57941037/c232ba4c-d50e-4887-85ab-91739928119e"
        }
      ]
    },
    {
      "name": "功能类-星穹铁道自动签到",
      "desc": "点击签到-关闭弹窗-返回",
      "enable": false,
      "forcedTime": 5000,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] >4 View[childCount=10] > View + TextView",
          "key": 0,
          "name": "点击签到",
          "snapshotUrls": "https://i.gkd.li/i/14376296",
          "exampleUrls": "https://m.gkd.li/57941037/a9f426c4-3184-4525-b283-ad77d6f83d02"
        },
        {
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] >3 TextView[index=1]",
          "preKeys": 0,
          "key": 1,
          "name": "关闭签到后的弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14967631",
          "exampleUrls": "https://m.gkd.li/57941037/3babb231-30a7-4891-9c4a-c11946838741"
        },
        {
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] > View > View[index=0] >3 TextView[clickable=true]",
          "preKeys": 1,
          "key": 2,
          "name": "返回上一个页面",
          "snapshotUrls": "https://i.gkd.li/i/14371790",
          "exampleUrls": "https://m.gkd.li/57941037/d8031907-105b-4d37-8542-b71e854b3b8a"
        }
      ]
    },
    {
      "name": "功能类-自动开启参量质变仪提醒",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"提醒\"] <n @[clickable=true] - [text=\"参量质变仪\"]",
          "activityIds": ".web2.MiHoYoWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/25608285",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25608302",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "desc": "关闭青少年模式提醒弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/tv_dialog_go_to_teenage_mode\"] + TextView[id=\"com.mihoyo.hyperion:id/tv_dialog_i_know\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "关闭版本更新提示弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/mUpgradeDialogCancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新提示",
      "desc": "关闭版本更新提示弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/mUpgradeDialogCancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "自动打卡",
      "desc": "点击[打卡],切换板块自动签到",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/signTv\"][text=\"打卡\"][visibleToUser=true]",
          "key": 0
        }
      ]
    }
  ]
});
