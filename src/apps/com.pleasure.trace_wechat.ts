// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微拾",
  "id": "com.pleasure.trace_wechat",
  "groups": [
    {
      "name": "分段广告-我的页面卡片广告",
      "desc": "需点击二次弹窗确认",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [id=\"com.pleasure.trace_wechat:id/adsuyi_id_view_response\"]",
          "key": 0,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/13479466"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "name": "关闭原因\"不感兴趣\"",
          "snapshotUrls": "https://i.gkd.li/i/13479469",
          "key": 1
        },
        {
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [vid=\"adsuyi_id_view_response\"]",
          "key": 2,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/13479466"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"反馈\"] -2 @View > Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": "https://i.gkd.li/i/13479468",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-我的-卡片式广告",
      "desc": "需点击二次弹窗确认",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [id=\"com.pleasure.trace_wechat:id/adsuyi_id_view_response\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/i/13479466"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "关闭原因【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/13479469",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-【字节】广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"反馈\"] -2 @View > Image",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-我的-卡片式广告",
      "desc": "需点击二次弹窗确认",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [id=\"com.pleasure.trace_wechat:id/adsuyi_id_view_response\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13479466"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "关闭原因【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13479469",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-【字节】广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"反馈\"] -2 @View > Image",
          "key": 0
        }
      ]
    },
    {
      "name": "我的-卡片式广告",
      "desc": "需点击二次弹窗确认",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [id=\"com.pleasure.trace_wechat:id/adsuyi_id_view_response\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13479466"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "关闭原因【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13479469",
          "key": 1
        }
      ]
    },
    {
      "name": "【字节】广告弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"反馈\"] -2 @View > Image",
          "key": 0
        }
      ]
    }
  ]
});
