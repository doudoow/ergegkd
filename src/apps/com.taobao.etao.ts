// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "一淘",
  "id": "com.taobao.etao",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @RelativeLayout[clickable=true][childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.taobao.etao.app.home.view.NewHomeActivity",
            "com.taobao.etao.app.homev4.HomeV4Activity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12739581",
            "https://i.gkd.li/i/13670025"
          ]
        },
        {
          "matches": "[text=\"一淘-首页红包升级-2312wf\"] >5 View[childCount=3] > View[index=0][visibleToUser=true]",
          "activityIds": "com.taobao.etao.app.homev4.HomeV4Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14622468",
          "exampleUrls": "https://m.gkd.li/57941037/db5c7761-3a8b-4bc6-a61c-65dd30f61b9f"
        },
        {
          "matches": "@ImageView[width<150 && height<150] <2 FrameLayout < [vid=\"dialog_container\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/30859236"
        },
        {
          "matches": "ImageView[width<150 && height<150] < @[clickable=true] + [vid=\"dialog_container\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/30859577"
        },
        {
          "matches": "@View[id=null][visibleToUser=true][width<150 && height<150][parent.childCount=3] <<n [vid=\"dialog_container\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/30859628"
        },
        {
          "matches": "ImageView[width<150 && height<150] < @RelativeLayout[clickable=true][childCount=1] <2 [childCount=2] < [id=\"android:id/content\"]",
          "activityIds": ".app.home.view.NewHomeActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/30859526"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"打开消息通知\"] + [text=\"去开启\"] + ImageView[clickable=true]",
          "activityIds": "com.taobao.sns.app.message.MessageActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12684278"
        },
        {
          "matches": "[text^=\"打开消息通知\"] + FrameLayout > [text=\"去开启\"] < FrameLayout + ImageView[clickable=true]",
          "activityIds": ".mine.MetaXMineActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12684351"
        },
        {
          "matches": "@[text=null][clickable=true][width<150][childCount=0] -(1,2) [text*=\"开\"][text*=\"通知\"][visibleToUser=true]",
          "activityIds": [
            "com.taobao.sns.app.message.MessageActivity",
            ".mine.MetaXMineActivity",
            ".app.homev4.HomeV4Activity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12684278",
            "https://i.gkd.li/i/12684351",
            "https://i.gkd.li/i/30634250"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "通知提示-请求打开系统通知提示信息",
      "desc": "自动点击提示信息的 x 按钮",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text^=\"打开消息通知\"] + [text=\"去开启\"] + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12684278"
          ],
          "key": 0
        },
        {
          "matches": "[text^=\"打开消息通知\"] + FrameLayout > [text=\"去开启\"] < FrameLayout + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12684351"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"更新提示\"] <<2 * +2 * >2 [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求打开系统通知提示信息",
      "desc": "自动点击提示信息的x按钮",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"打开消息通知\"] + [text=\"去开启\"] + ImageView[clickable=true]",
          "activityIds": [
            "com.taobao.sns.app.message.MessageActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12684278"
          ],
          "key": 0
        },
        {
          "matches": "[text^=\"打开消息通知\"] + FrameLayout > [text=\"去开启\"] < FrameLayout + ImageView[clickable=true]",
          "activityIds": [
            "com.taobao.etao.mine.MetaXMineActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12684351"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"更新提示\"] <<2 * +2 * >2 [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @RelativeLayout[clickable=true][childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.taobao.etao.app.home.view.NewHomeActivity",
            "com.taobao.etao.app.homev4.HomeV4Activity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12739581",
            "https://i.gkd.li/import/13670025"
          ]
        }
      ]
    },
    {
      "name": "请求打开系统通知提示信息",
      "desc": "自动点击提示信息的x按钮",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text^=\"打开消息通知\"] + [text=\"去开启\"] + ImageView[clickable=true]",
          "activityIds": [
            "com.taobao.sns.app.message.MessageActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12684278"
          ],
          "key": 0
        },
        {
          "matches": "[text^=\"打开消息通知\"] + FrameLayout > [text=\"去开启\"] < FrameLayout + ImageView[clickable=true]",
          "activityIds": [
            "com.taobao.etao.mine.MetaXMineActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12684351"
          ],
          "key": 1
        }
      ]
    }
  ]
});
