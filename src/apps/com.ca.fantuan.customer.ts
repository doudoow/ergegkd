// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Fantuan Delivery",
  "id": "com.ca.fantuan.customer",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"开启消息通知\" || text*=\"开启系统通知\"][visibleToUser=true]",
            "[vid=\"tv_cancel\" || vid=\"iv_close\" || vid=\"iv_notification_close\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".app.mainv2.view.MainActivity",
            ".app.orderdetail.view.OrderDetailActivity",
            ".app.p_address.city.view.SelectCityActivity",
            ".app.payresult_v2.view.OrderPaySuccessActivity",
            ".app.main.view.MainActivityV2"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/19442163",
            "https://i.gkd.li/i/19460300",
            "https://i.gkd.li/i/19442191",
            "https://i.gkd.li/i/19624918",
            "https://i.gkd.li/i/19676244",
            "https://i.gkd.li/i/20633831",
            "https://i.gkd.li/i/22441592"
          ],
          "exampleUrls": "https://e.gkd.li/8dd09677-8a02-4496-8611-c37b70e981d7"
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"写评价\" || text=\"您对饭团外卖的评价如何\"][visibleToUser=true]",
            "[vid=\"close_iv\" || vid=\"iv_dialog_close\"][visibleToUser=true]"
          ],
          "activityIds": ".app.mainv2.view.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19442188",
            "https://i.gkd.li/i/20598853"
          ],
          "exampleUrls": [
            "https://e.gkd.li/8bd038b0-c555-4ac5-b1c0-c31c351cd788",
            "https://e.gkd.li/43231b54-3fd3-4c1d-9217-8721f86153ba"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[vid=\"home_bottom_float_view\"][visibleToUser=true]",
            "[vid=\"iv_close\"][visibleToUser=true]"
          ],
          "activityIds": ".app.mainv2.view.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19459880",
          "exampleUrls": "https://e.gkd.li/a61401ed-245c-4942-9245-bae8fbb15abd",
          "key": 0
        },
        {
          "matches": "[vid=\"home_bottom_float_view\"] >3 [vid=\"iv_close\"]",
          "activityIds": ".app.mainv2.view.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19459880",
          "exampleUrls": "https://e.gkd.li/a61401ed-245c-4942-9245-bae8fbb15abd",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击x掉",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"activity_popup_close\"][clickable=true]",
          "activityIds": ".app.main.view.MainActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28430432",
          "key": 0
        }
      ]
    }
  ]
});
