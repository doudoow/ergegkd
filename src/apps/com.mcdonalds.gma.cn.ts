// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "麦当劳",
  "id": "com.mcdonalds.gma.cn",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击[取消]",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"开启通知服务\"]",
            "[text=\"取消\"]"
          ],
          "actionMaximum": 1,
          "activityIds": ".activity.MainActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13259242",
          "exampleUrls": "https://e.gkd.li/64df0999-cd85-48c3-871f-5e65e9131d6e"
        },
        {
          "matches": "@[vid=\"v_cancel\"] + [vid=\"v_open\"]",
          "activityIds": "com.mcd.order.activity.OrderDetailActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17092374",
          "exampleUrls": "https://e.gkd.li/123fc7d2-b2a3-41fb-8e4c-50f625b195c4"
        },
        {
          "matches": "[id=\"com.mcdonalds.gma.cn:id/tv_cancel\"][text=\"取消\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_ad_close\"][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17967920",
          "exampleUrls": "https://e.gkd.li/6a95fcb7-3f9c-43f8-80bb-bdd034c81252"
        },
        {
          "matches": "[vid=\"recommend_product_close\"][visibleToUser=true]",
          "activityIds": "com.mcd.order.activity.OrderActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17967943",
          "exampleUrls": "https://e.gkd.li/8f3670e7-a0c9-47a5-b708-163a94ac2a8f"
        }
      ]
    },
    {
      "name": "功能类-关闭[开通免密支付]弹窗",
      "key": 2,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] - * >2 [text*=\"免密支付\"]",
          "activityIds": "com.mcd.order.activity.OrderDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14798873",
          "exampleUrls": "https://m.gkd.li/57941037/4b26dc9e-06d9-43a2-a105-6fb711c9aedb",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-设备信息权限",
      "desc": "点击[不允许]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text$=\"获取您的设备信息\"] + * > [text=\"不允许\"]",
          "activityIds": "com.mcdonalds.gma.cn.activity.LaunchActivity",
          "snapshotUrls": "https://i.gkd.li/i/15944357",
          "exampleUrls": "https://m.gkd.li/101449500/121c7e65-780e-41aa-acf8-34c491d4be41",
          "key": 0
        },
        {
          "matches": "[text$=\"获取您的设备信息\"] + * > [text=\"不允许\"]",
          "activityIds": ".activity.LaunchActivity",
          "snapshotUrls": "https://i.gkd.li/i/15944357",
          "exampleUrls": "https://m.gkd.li/101449500/121c7e65-780e-41aa-acf8-34c491d4be41",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-优惠券弹窗",
      "desc": "自动关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.mcdonalds.gma.cn:id/iv_ad_close\"]",
          "activityIds": "com.mcdonalds.gma.cn.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13465873",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭 [开通免密支付] 弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] - * >2 [text*=\"免密支付\"]",
          "activityIds": "com.mcd.order.activity.OrderDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14798873",
          "exampleUrls": "https://m.gkd.li/57941037/4b26dc9e-06d9-43a2-a105-6fb711c9aedb",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启通知服务",
      "desc": "选择[取消]",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.mcdonalds.gma.cn:id/tv_cancel\"][text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开启通知服务",
      "desc": "选择[取消]",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.mcdonalds.gma.cn:id/tv_cancel\"][text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "优惠券弹窗",
      "desc": "自动关闭",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.mcdonalds.gma.cn:id/iv_ad_close\"]",
          "activityIds": "com.mcdonalds.gma.cn.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13465873",
          "key": 0
        }
      ]
    }
  ]
});
