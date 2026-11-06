// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "黑阈",
  "id": "me.piebridge.brevent",
  "groups": [
    {
      "name": "权限提示-权限不足弹窗",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"黑阈服务权限不足\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "me.piebridge.brevent.ui.BreventActivity",
          "snapshotUrls": "https://i.gkd.li/i/13218439",
          "key": 0
        },
        {
          "matches": [
            "[id=\"android:id/message\"][text^=\"黑阈服务权限不足\"]",
            "[text=\"取消\"][id^=\"android:id/button\"]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13218439"
        },
        {
          "matches": [
            "[text^=\"黑阈服务权限不足\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".ui.BreventActivity",
          "snapshotUrls": "https://i.gkd.li/i/13218439",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-已黑阈无法打开app",
      "desc": "每次打开弹窗-取消",
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayout[childCount=3] >2 *[childCount=2] > [text=\"取消\"][clickable=true][visibleToUser=true]",
          "activityIds": ".ui.BreventActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26143603",
          "exampleUrls": "https://e.gkd.li/9a61e111-6285-41bd-b5fd-ec64a0e2675e",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-权限不足弹窗",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[id=\"android:id/message\"][text^=`黑阈服务权限不足`]",
            "[text=`取消`][id^=`android:id/button`]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13218439",
          "key": 0
        }
      ]
    },
    {
      "name": "权限不足弹窗",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id=\"android:id/message\"][text^=`黑阈服务权限不足`]",
            "[text=`取消`][id^=`android:id/button`]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13218439",
          "key": 0
        }
      ]
    }
  ]
});
