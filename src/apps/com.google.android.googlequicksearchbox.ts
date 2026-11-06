// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Google",
  "id": "com.google.android.googlequicksearchbox",
  "groups": [
    {
      "name": "全屏广告-Gemini-个性化Tip",
      "desc": "试用新功能举例对话(浪费Token)",
      "matchTime": 16000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"Gemini 现在可以根据\"] <<4 [vid*=\"main_scroll_view\"] + [vid*=\"_bottom_buttons_container\"] > [text=\"关闭\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25823279",
          "exampleUrls": "https://e.gkd.li/71341a5d-d722-47a0-a6d9-5fa65d550791"
        }
      ]
    },
    {
      "name": "局部广告-Gemini-试用新功能",
      "desc": "横幅tip-x掉",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"assistant_server_driven_discovery_banner\"] >2 @[vid*=\"_dimiss_button\"][clickable=true][visibleToUser=true] +2 [text=\"立即试用\"]",
          "activityIds": "com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25823465",
          "exampleUrls": "https://e.gkd.li/fa3826c9-9c92-41a4-9060-0bc80dd72867"
        }
      ]
    },
    {
      "name": "功能类-Gemini-对话连接中断重试",
      "desc": "Gemini对话连接中断自动重试",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"assistant_robin_main_activity\"] + FrameLayout > LinearLayout[childCount=2] > [vid=\"snackbar_action\"][clickable=true][visibleToUser=true]",
          "key": 0,
          "name": "对话页",
          "snapshotUrls": "https://i.gkd.li/i/26026659",
          "exampleUrls": "https://e.gkd.li/3d633f7c-e3df-45dd-995f-b72b218922cd"
        },
        {
          "matches": "@[text=\"重试\"][clickable=true] - [text=\"无法连接\"][visibleToUser=true] < View[childCount=2] <n View + View[clickable=true] >(6-n) [vid=\"og_selected_account_disc_apd\"]",
          "key": 1,
          "name": "对话历史页",
          "snapshotUrls": "https://i.gkd.li/i/29405274",
          "exampleUrls": "https://e.gkd.li/99430190-2af2-4b43-a648-7bacea509dd7"
        }
      ]
    },
    {
      "name": "局部广告-Gemini-个性化Tip",
      "desc": "试用新功能举例对话(浪费Token)",
      "matchTime": 16000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"关闭\"] < @View[clickable=true] - * -> [text$=\"体验个性化智能服务\"][visibleToUser=true] < ScrollView <<(6-n) [vid=\"assistant_robin_zero_state_default_assistant_upsell_banner_container\"]",
          "activityIds": "com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29405181",
          "exampleUrls": "https://e.gkd.li/f2520556-dbf0-44ff-97f5-dd0978f7880d",
          "key": 0
        }
      ]
    }
  ]
});
