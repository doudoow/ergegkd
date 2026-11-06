// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "阿里云盘",
  "id": "com.alicloud.databox",
  "groups": [
    {
      "name": "功能类-自动签到",
      "desc": "自动点击签到按钮并关闭签到后的弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"领取\"][clickable=true][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15573070",
            "https://i.gkd.li/i/15573233"
          ]
        },
        {
          "matches": "[vid=\"ivCardBackBackground\"][visibleToUser=true]",
          "action": "back",
          "preKeys": [
            5
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15144565"
        },
        {
          "matches": "[id=\"com.alicloud.databox:id/tvTaskAction\"][text=\"领取\"]",
          "key": 2,
          "name": "自动点击签到",
          "snapshotUrls": "https://i.gkd.li/i/12929318"
        },
        {
          "matches": "[vid=\"ivClose\"]",
          "actionMaximum": 2,
          "preKeys": [
            5
          ],
          "key": 3,
          "name": "关闭弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038304",
            "https://i.gkd.li/i/14235221",
            "https://i.gkd.li/i/15119433"
          ]
        },
        {
          "anyMatches": [
            "[text=\"保存至\"]",
            "[vid=\"ivCardBackBackground\"][visibleToUser=true]",
            "[vid=\"cvCardFront\"] > [vid=\"ivClose\"][visibleToUser=true]"
          ],
          "action": "back",
          "key": 4,
          "name": "在签到后，关闭弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/18108340",
            "https://i.gkd.li/i/19515122"
          ]
        },
        {
          "matches": [
            "[id=\"com.alicloud.databox:id/tvTaskAction\"][text=\"领取\"]"
          ],
          "fastQuery": true,
          "key": 5,
          "name": "自动签到",
          "snapshotUrls": "https://i.gkd.li/import/12929318"
        },
        {
          "matches": [
            "[id=\"com.alicloud.databox:id/ivClose\"]"
          ],
          "preKeys": [
            5
          ],
          "fastQuery": true,
          "key": 6,
          "name": "在签到后，关闭弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13038304"
        }
      ]
    },
    {
      "name": "全屏广告-活动弹窗",
      "desc": "关闭全屏活动弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@TextView[clickable=true][visibleToUser=true] - Image[text!=null] < View < View < View < WebView < WebView < [vid=\"webContainer\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14235204",
          "key": 0
        },
        {
          "matches": "[text^=\"好运盲盒\"] >n View > Image + TextView[clickable=true]",
          "key": 1
        },
        {
          "anyMatches": [
            "WebView[text!=null && text!=\"\"] > View[id=\"root\"] >2 View > TextView[index=parent.childCount.minus(2)]",
            "WebView[text=null || text=\"\"] > View[id=\"root\"] >2 View > TextView[index=parent.childCount.minus(1)]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13228610",
            "https://i.gkd.li/import/14161216",
            "https://i.gkd.li/import/14235204",
            "https://i.gkd.li/i/14414446",
            "https://i.gkd.li/i/18108117"
          ]
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "关闭应用更新提示弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 2,
      "rules": [
        {
          "matches": "[text^=\"立即了解\"] -3 @View[clickable=true] <<n [vid=\"webContainer\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13806865",
          "key": 0
        },
        {
          "matches": "[text^=\"立即了解\"] -3 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13806865",
          "key": 1
        },
        {
          "matches": "[text*=\"新版本\"] -n @[clickable=true][getChild(0).name$=\"Image\"] <<4 [id=\"root\"] <<3 [vid=\"webContainer\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13806865",
          "key": 2
        },
        {
          "matches": "[text*=\"新版本\"] -n @[clickable=true][getChild(0).name$=\"Image\"] <<4 [id=\"root\"] <<3 [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/import/13806865",
          "key": 3
        }
      ]
    },
    {
      "name": "功能类-[开启相册自动备份功能]弹窗",
      "desc": "关闭弹窗",
      "key": 3,
      "rules": [
        {
          "matches": "@TextView[childCount=0][clickable=true][visibleToUser=true] <4 View[childCount=4] < View < View < WebView < WebView < [vid=\"webContainer\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14414446",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-扫描二维码登录时自动点击登录",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"确认并登录\"][clickable=true]",
          "activityIds": "com.taobao.login4android.scan.QrScanActivity",
          "snapshotUrls": "https://i.gkd.li/i/14414503",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-[容量使用超限]提示",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text=\"容量使用超限\"]",
            "[vid=\"layout_close\"]"
          ],
          "activityIds": "com.alicloud.databox.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15158788",
          "exampleUrls": "https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed",
          "key": 0
        },
        {
          "matches": [
            "[text=\"容量使用超限\"]",
            "[vid=\"layout_close\"]"
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15158788",
          "exampleUrls": "https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed",
          "key": 1
        },
        {
          "matches": [
            "[text=\"容量使用超限\"]",
            "[vid=\"layout_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15158788",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "关闭卡片式广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"close\"]",
          "activityIds": "com.alicloud.databox.transferpage.TransferListActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15433289"
        },
        {
          "matches": "[vid=\"close\"]",
          "activityIds": ".transferpage.TransferListActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15433289"
        },
        {
          "matches": "[vid=\"close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15433289"
        }
      ]
    },
    {
      "name": "功能类-时光设备间-自动点击“开心收下”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 7,
      "rules": [
        {
          "matches": "View[childCount=9] > @Image -2 View[childCount=5]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-签到任务完成弹窗",
      "desc": "点击x",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[vid=\"layoutLuckyBottle\"] >3 [vid=\"ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-时光设备间-自动点击",
      "desc": "自动点击“开心收下”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 9,
      "rules": [
        {
          "matches": "View[childCount=9] > @Image -2 View[childCount=5]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-顶端横幅”",
      "desc": "出现在首页、备份盘、资源库",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": [
            "[id=\"com.alicloud.databox:id/ivTitleAction\"]"
          ],
          "excludeMatches": "[vid=\"layoutBanner\"] > [text$=\">>\"]",
          "key": 0,
          "name": "首页",
          "snapshotUrls": "https://i.gkd.li/import/14161399",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17556779"
        },
        {
          "matches": [
            "[id=\"com.alicloud.databox:id/notice_view_icon_button\"]"
          ],
          "key": 1,
          "name": "备份盘、资源库",
          "snapshotUrls": [
            "https://i.gkd.li/import/14161340",
            "https://i.gkd.li/import/14161336"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动授权",
      "desc": "包括扫码登录",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"确认并登录\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14414503",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text^=\"立即了解\"] -3 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13806865",
          "key": 0
        }
      ]
    },
    {
      "name": "自动签到",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": [
            "[id=\"com.alicloud.databox:id/tvTaskAction\"][text=\"领取\"]"
          ],
          "quickFind": true,
          "key": 0,
          "name": "自动签到",
          "snapshotUrls": "https://i.gkd.li/import/12929318"
        },
        {
          "matches": [
            "[id=\"com.alicloud.databox:id/ivClose\"]"
          ],
          "preKeys": [
            0
          ],
          "quickFind": true,
          "key": 1,
          "name": "在签到后，关闭弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13038304"
        }
      ]
    },
    {
      "name": "活动弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[text^=\"好运盲盒\"] >n View > Image + TextView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "时光设备间-自动点击“开心收下”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 15,
      "rules": [
        {
          "matches": "View[childCount=9] > @Image -2 View[childCount=5]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[text^=\"立即了解\"] -3 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13806865",
          "key": 0
        }
      ]
    }
  ]
});
