// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀智慧空间",
  "id": "com.hihonor.magichome",
  "groups": [
    {
      "name": "局部广告-首页顶部广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.magichome:id/item_close_image\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"item_close_image\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-推荐服务声明",
      "desc": "推荐服务声明弹窗。默认点击\"取消\"按钮",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [id=\"com.hihonor.magichome:id/negative_btn\"]",
          "key": 0
        },
        {
          "matches": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [vid=\"negative_btn\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击以后再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"立即更新\"] -2 [id=\"com.hihonor.magichome:id/negative_btn\"][text=\"以后再说\"]",
          "activityIds": ".business.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12916700",
          "key": 0
        },
        {
          "matches": "TextView[text=\"立即更新\"] -2 [vid=\"negative_btn\"][text=\"以后再说\"]",
          "activityIds": ".business.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12916700",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页顶部广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.magichome:id/item_close_image\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-推荐服务声明",
      "desc": "推荐服务声明弹窗。默认点击【取消】按钮",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [id=\"com.hihonor.magichome:id/negative_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-升级提示",
      "desc": "点击以后再说",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "TextView[text=\"立即更新\"] -2 [id=\"com.hihonor.magichome:id/negative_btn\"][text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-推荐服务声明",
      "desc": "推荐服务声明弹窗。默认点击【取消】按钮",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [id=\"com.hihonor.magichome:id/negative_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-升级提示",
      "desc": "点击以后再说",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "TextView[text=\"立即更新\"] -2 [id=\"com.hihonor.magichome:id/negative_btn\"][text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页顶部广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.magichome:id/item_close_image\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "推荐服务声明",
      "desc": "推荐服务声明弹窗。默认点击【取消】按钮",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [id=\"com.hihonor.magichome:id/negative_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提示",
      "desc": "点击以后再说",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "TextView[text=\"立即更新\"] -2 [id=\"com.hihonor.magichome:id/negative_btn\"][text=\"以后再说\"]",
          "key": 0
        }
      ]
    }
  ]
});
