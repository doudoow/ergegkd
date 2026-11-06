// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智联招聘",
  "id": "com.zhaopin.social",
  "groups": [
    {
      "name": "未分类-我的页面-banner广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/rl_banner_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-社区-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-消息-开启消息通知",
      "desc": "自动点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/message_pushlayout_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-我的页面卡片广告",
      "desc": "关闭我的页面中的卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/rl_banner_close\"][visibleToUser=true][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-社区页面弹窗广告",
      "desc": "关闭社区页面弹出的全屏推广弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/update\"] + [id=\"com.zhaopin.social:id/ignore\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-我的页面-banner广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/rl_banner_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-社区-弹窗广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-消息-开启消息通知",
      "desc": "自动点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/message_pushlayout_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/update\"] + [id=\"com.zhaopin.social:id/ignore\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "我的页面-banner广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/rl_banner_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "社区-弹窗广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "消息-开启消息通知",
      "desc": "自动点击关闭",
      "enable": false,
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/message_pushlayout_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
