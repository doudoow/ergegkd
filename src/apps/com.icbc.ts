// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国工商银行",
  "id": "com.icbc",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.icbc:id/tv_time\"][text*=\"跳过\"][text.length<=6]",
          "activityIds": ".activity.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13330431",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_time\"][text*=\"跳过\"][text.length<=6]",
          "activityIds": ".activity.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13330431",
          "key": 1
        },
        {
          "matches": "[id=\"com.icbc:id/tv_time\"][text*=\"跳过\"][text.length<=6]",
          "key": 2
        }
      ]
    },
    {
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"觉得“中国工商银行”好用吗\"]",
            "[text=\"下次再说\"][clickable=true]"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/18296892",
            "https://i.gkd.li/i/24981859"
          ],
          "exampleUrls": "https://e.gkd.li/85e48265-4269-4122-a70f-5361698954c0",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-右下角浮标广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_close_task_center\"]",
          "activityIds": [
            ".activity.web.ICBCWebView",
            ".activity.main.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22616307",
            "https://i.gkd.li/i/23227312"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close_task_center\"]",
          "activityIds": [
            ".activity.web.ICBCWebView",
            ".activity.main.MainActivity",
            ".mydetail.MyDetailMainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22616307",
            "https://i.gkd.li/i/23227312"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-未登录时自动点击登录",
      "desc": "仅限老年版和英文版可用",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"rl_remit_login_button_background\"][visibleToUser=true]",
          "activityIds": ".activity.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23227516",
            "https://i.gkd.li/i/23227551"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-第一次启动提示",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.icbc:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.icbc:id/tv_time\"][text*=\"跳过\"][text.length<=6]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[vid=\"close_iv\"][clickable=true]"
          ],
          "activityIds": ".oisc.UI.mainPage.OISCMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25356505",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-第一次启动提示",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.icbc:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "第一次启动提示",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.icbc:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.icbc:id/tv_time\"][text*=\"跳过\"][text.length<=6]",
          "key": 0
        }
      ]
    }
  ]
});
