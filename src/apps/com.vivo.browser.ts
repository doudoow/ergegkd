// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "vivo浏览器",
  "id": "com.vivo.browser",
  "groups": [
    {
      "name": "功能类-免流提示",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.vivo.browser:id/dialog_button_right\"][text=\"继续浏览\"]",
          "activityIds": "com.vivo.browser.pendant.PendantActivity",
          "snapshotUrls": "https://i.gkd.li/i/12847431",
          "key": 0
        },
        {
          "matches": "[vid=\"dialog_button_right\"][text=\"继续浏览\"]",
          "activityIds": ".pendant.PendantActivity",
          "snapshotUrls": "https://i.gkd.li/i/12847431",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-天气详情页面",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text$=\"广告\"] +5 * > Image",
          "activityIds": "com.vivo.browser.lightweb.LightWebNomalStartActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14392332"
        },
        {
          "matches": "[text$=\"广告\"] +5 * > Image",
          "activityIds": ".lightweb.LightWebNomalStartActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14392332"
        }
      ]
    },
    {
      "name": "未分类-免流提示",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.vivo.browser:id/dialog_button_right\"][text=\"继续浏览\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-免流提示",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.vivo.browser:id/dialog_button_right\"][text=\"继续浏览\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true][clickable=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16739023",
          "exampleUrls": "https://e.gkd.li/ae56bdf6-1de3-4a19-bcd3-233212aeffc0",
          "key": 0
        }
      ]
    },
    {
      "name": "免流提示",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.vivo.browser:id/dialog_button_right\"][text=\"继续浏览\"]",
          "key": 0
        }
      ]
    }
  ]
});
