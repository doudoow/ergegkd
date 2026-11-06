// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "瑞幸咖啡",
  "id": "com.lucky.luckyclient",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.lucky.luckyclient:id/dismiss_btn\"] - LinearLayout > ImageView[id=\"com.lucky.luckyclient:id/update_btn\"]",
          "activityIds": "com.luckin.client.main.FirstActivity",
          "snapshotUrls": "https://i.gkd.li/i/12846499",
          "key": 0
        },
        {
          "matches": "@ImageView[vid=\"dismiss_btn\"] - LinearLayout > ImageView[vid=\"update_btn\"]",
          "activityIds": "com.luckin.client.main.FirstActivity",
          "snapshotUrls": "https://i.gkd.li/i/12846499",
          "key": 1
        },
        {
          "matches": "@ImageView[id=\"com.lucky.luckyclient:id/dismiss_btn\"] - LinearLayout > ImageView[id=\"com.lucky.luckyclient:id/update_btn\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-超值换购弹窗",
      "desc": "关闭超值换购弹窗",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.lucky.luckyclient:id/close_iv\"][visibleToUser=true]",
          "activityIds": "com.lucky.luckyclient.preview2.OrderPreviewActivity2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12922834",
          "key": 0
        },
        {
          "matches": "[vid=\"close_iv\"][visibleToUser=true]",
          "activityIds": ".preview2.OrderPreviewActivity2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12922834",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-优惠卷领取提示",
      "desc": "按下返回键关闭优惠卷领取提示",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.lucky.luckyclient:id/webcontent\"]",
          "action": "back",
          "activityIds": "com.luckin.client.main.FirstActivity",
          "snapshotUrls": "https://i.gkd.li/i/13164114",
          "key": 0
        },
        {
          "matches": "[vid=\"webcontent\"]",
          "action": "back",
          "activityIds": "com.luckin.client.main.FirstActivity",
          "snapshotUrls": "https://i.gkd.li/i/13164114",
          "key": 1
        },
        {
          "matches": "[id=\"com.lucky.luckyclient:id/webcontent\"]",
          "action": "back",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-软件更新",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.lucky.luckyclient:id/dismiss_btn\"] - LinearLayout > ImageView[id=\"com.lucky.luckyclient:id/update_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-超值换购",
      "desc": "关闭超值换购弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.lucky.luckyclient:id/close_iv\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-优惠卷领取提示",
      "desc": "按下返回键关闭优惠卷领取提示",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.lucky.luckyclient:id/webcontent\"]",
          "action": "back",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-超值换购",
      "desc": "关闭超值换购弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.lucky.luckyclient:id/close_iv\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "软件更新",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.lucky.luckyclient:id/dismiss_btn\"] - LinearLayout > ImageView[id=\"com.lucky.luckyclient:id/update_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "超值换购",
      "desc": "关闭超值换购弹窗",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.lucky.luckyclient:id/close_iv\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "优惠卷领取提示",
      "desc": "按下返回键关闭优惠卷领取提示",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.lucky.luckyclient:id/webcontent\"]",
          "action": "back",
          "key": 0
        }
      ]
    }
  ]
});
