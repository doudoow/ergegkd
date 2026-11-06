// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为浏览器",
  "id": "com.huawei.browser",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/13403785",
          "key": 0
        },
        {
          "matches": "[id$=\"/hiad_skip_text\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12681995",
            "https://i.gkd.li/i/13403785"
          ],
          "key": 1
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/13403785",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "关闭资讯通知后，总是弹窗让打开",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.huawei.browser:id/close_push_guide_window\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13692404",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "key": 0
        },
        {
          "matches": "[vid=\"close_push_guide_window\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13692404",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "View[id=\"root\"] > View[index=1] > @View[visibleToUser=true][id=\"logo-close-btn\"] <<n [vid=\"web_view_container\"]",
          "activityIds": "com.huawei.browser.customtab.EmuiBrowserCustomTabActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13997759"
        },
        {
          "matches": "[vid=\"group_header_close_button\"][visibleToUser=true]",
          "activityIds": ".download.DownloadRecordsActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20852584",
          "exampleUrls": "https://e.gkd.li/f5b1576c-372d-4376-b122-129cd0249d85"
        },
        {
          "matches": "View[id=\"root\"] > View[index=1] > @View[visibleToUser=true][id=\"logo-close-btn\"] <<n [vid=\"web_view_container\"]",
          "activityIds": ".customtab.EmuiBrowserCustomTabActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13997759"
        }
      ]
    },
    {
      "name": "未分类-开启资讯通知弹窗",
      "desc": "关闭资讯通知后，总是弹窗让打开",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.huawei.browser:id/close_push_guide_window\"]",
          "activityIds": "com.huawei.browser.BrowserMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13692404",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启资讯通知弹窗",
      "desc": "关闭资讯通知后，总是弹窗让打开",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.huawei.browser:id/close_push_guide_window\"]",
          "activityIds": "com.huawei.browser.BrowserMainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13692404",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "key": 0
        }
      ]
    },
    {
      "name": "开启资讯通知弹窗",
      "desc": "关闭资讯通知后，总是弹窗让打开",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.huawei.browser:id/close_push_guide_window\"]",
          "activityIds": "com.huawei.browser.BrowserMainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13692404",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "key": 0
        }
      ]
    }
  ]
});
