// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易有道词典",
  "id": "com.youdao.dict",
  "groups": [
    {
      "name": "分段广告-单词页面卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13800055",
            "https://i.gkd.li/i/16278151",
            "https://i.gkd.li/i/17963902"
          ]
        },
        {
          "matches": "[vid=\"close_pop\"][text=\"收起广告\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13800056",
            "https://i.gkd.li/i/16278150",
            "https://i.gkd.li/i/17963904"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.youdao.dict:id/iv_close_bt\"]",
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            "com.youdao.dict.activity.DictSplashActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "首页-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893419",
            "https://i.gkd.li/i/13263801"
          ]
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            "com.youdao.dict.edu.main.MainPopDialog",
            "com.youdao.dict.activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "学习页面-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893450",
            "https://i.gkd.li/i/16859556",
            "https://i.gkd.li/i/20602998"
          ]
        },
        {
          "matches": "[vid=\"skip_bottom_view\"]",
          "activityIds": [
            "com.youdao.dict.activity.DictSplashActivity",
            "com.youdao.dict.activity.DictHotBootSplashActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "name": "抽奖机会-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13931202",
            "https://i.gkd.li/i/14064647"
          ]
        },
        {
          "matches": "[vid=\"image\"] + [vid=\"close\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 3,
          "name": "首页-礼包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14296482"
        },
        {
          "matches": "@[vid=\"iv_cancel\"][visibleToUser=true] - [vid=\"fl_video_container\"]",
          "activityIds": ".activity.DictQueryActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/18051512",
          "exampleUrls": "https://e.gkd.li/342a587e-bf0d-42e9-8c16-3c0b53240e5a"
        },
        {
          "matches": "@ImageView[vid=\"iv_close_bt\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictSplashActivity"
          ],
          "fastQuery": true,
          "key": 5,
          "name": "首页-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893419",
            "https://i.gkd.li/i/13263801"
          ]
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            ".edu.main.MainPopDialog",
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "name": "学习页面-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893450",
            "https://i.gkd.li/i/16859556",
            "https://i.gkd.li/i/20602998"
          ]
        },
        {
          "matches": "[vid=\"skip_bottom_view\"]",
          "activityIds": [
            ".activity.DictSplashActivity",
            ".activity.DictHotBootSplashActivity"
          ],
          "fastQuery": true,
          "key": 7,
          "name": "抽奖机会-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13931202",
            "https://i.gkd.li/i/14064647"
          ]
        },
        {
          "matches": "[vid=\"image\"] + [vid=\"close\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "key": 8,
          "name": "首页-礼包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14296482"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            "com.youdao.dict.edu.main.MainPopDialog",
            "com.youdao.dict.activity.MainActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "学习页面-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893450",
            "https://i.gkd.li/i/16859556"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[vid=\"iv_close\"][clickable=true]",
          "activityIds": [
            "com.youdao.dict.vip.activity.RecallSevenDayVipActivity",
            "com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity",
            ".activity.DictQueryActivity",
            ".vip.activity.FirstShowNewUserSevenDayVipActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13263706",
            "https://i.gkd.li/i/14381735",
            "https://i.gkd.li/i/16929322",
            "https://i.gkd.li/i/22275220"
          ]
        },
        {
          "matches": "[vid=\"aiv_guide_cancel\"][visibleToUser=true]",
          "activityIds": "com.youdao.feature_ai.AiMainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16426631",
          "exampleUrls": "https://e.gkd.li/7bfd334a-38a0-4251-966c-1df55c168425"
        },
        {
          "matches": "ImageView[id=\"com.youdao.dict:id/iv_close\"][clickable=true]",
          "key": 2
        },
        {
          "matches": "ImageView[vid=\"iv_close\"][clickable=true]",
          "activityIds": [
            ".vip.activity.RecallSevenDayVipActivity",
            ".vip.activity.SecondShowNewUserSevenDayVipActivity",
            ".activity.DictQueryActivity",
            ".vip.activity.FirstShowNewUserSevenDayVipActivity",
            ".activity.MainActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13263706",
            "https://i.gkd.li/i/14381735",
            "https://i.gkd.li/i/16929322",
            "https://i.gkd.li/i/22275220",
            "https://i.gkd.li/i/30662836"
          ]
        },
        {
          "matches": "ImageView[vid=\"iv_close\"][clickable=true]",
          "activityIds": [
            "com.youdao.dict.vip.activity.RecallSevenDayVipActivity",
            "com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity",
            ".activity.DictQueryActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13263706",
            "https://i.gkd.li/i/14381735",
            "https://i.gkd.li/i/16929322"
          ]
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.youdao.dict:id/btn_never\"][text*=\"不再提醒\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13540941",
            "https://i.gkd.li/i/14256301"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.youdao.dict:id/btn_never\"][text*=\"不再提醒\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"btn_never\"][text*=\"不再提醒\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13540941",
            "https://i.gkd.li/i/14256301"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.youdao.dict:id/tv_version\"] + [id=\"com.youdao.dict:id/iv_close\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13627912",
          "key": 0
        },
        {
          "matches": "[id=\"com.youdao.dict:id/tv_version\"] + [id=\"com.youdao.dict:id/iv_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"tv_version\"] + [vid=\"iv_close\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13627912",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-点击显示释义",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[desc=\"点击显示释义\"] > View[index=3][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14292588",
            "https://i.gkd.li/i/14292587"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"aivClose\" || vid=\"course_one_course_close\" || vid=\"home_ad_close\" || vid=\"course_four_course_close\" || vid=\"promotion_close_zone\"][visibleToUser=true]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14468564",
            "https://i.gkd.li/i/14567234",
            "https://i.gkd.li/i/14895765",
            "https://i.gkd.li/i/14009705",
            "https://i.gkd.li/i/14559287",
            "https://i.gkd.li/i/17082441",
            "https://i.gkd.li/i/17115693"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14468628",
          "exampleUrls": "https://e.gkd.li/df92c524-c732-4c16-9266-326056c9acf8"
        },
        {
          "matches": "[vid=\"aivClose\"][visibleToUser=true]",
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            "com.youdao.dict.activity.DictQueryActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "右下角悬浮卡片",
          "snapshotUrls": [
            "https://i.gkd.li/i/14468564",
            "https://i.gkd.li/i/14468628",
            "https://i.gkd.li/i/14567234"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/e365b983-15c7-4ac7-acd7-9d7be4c45160"
        },
        {
          "matches": "[vid=\"home_ad_close\"][clickable=true]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "主页卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/14009705"
        },
        {
          "matches": "[vid=\"course_four_course_close\"]",
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "单词页面下方广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/14559287",
            "https://i.gkd.li/i/17268301"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/4045988d-93bb-4aad-80dd-f14da296a214"
        },
        {
          "matches": "[vid=\"course_one_course_close\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 4,
          "name": "单词页面下方学习技巧",
          "snapshotUrls": "https://i.gkd.li/i/14895765",
          "exampleUrls": "https://m.gkd.li/57941037/0c033574-4bae-4bcc-bcf9-901ce8b5061b"
        }
      ]
    },
    {
      "name": "功能类-关闭单词页面[去复习]提示",
      "desc": "通过点击提示框以外的其他地方关闭",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"已收藏单词一周，快去复习吧\"]",
          "position": {
            "left": "width * 0.7231",
            "top": "width * -1.0673"
          },
          "activityIds": [
            "com.youdao.dict.activity.DictQueryActivity",
            "com.youdao.dict.activity.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14524540",
            "https://i.gkd.li/i/14524817"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/ab107cc2-98e1-44a2-a15a-0ee0d4925255",
          "key": 0
        },
        {
          "matches": "[text=\"已收藏单词一周，快去复习吧\"]",
          "position": {
            "left": "width * 0.7231",
            "top": "width * -1.0673"
          },
          "activityIds": [
            ".activity.DictQueryActivity",
            ".activity.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14524540",
            "https://i.gkd.li/i/14524817"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/ab107cc2-98e1-44a2-a15a-0ee0d4925255",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-开学福利弹窗",
      "desc": "点击[不要再提醒我]-点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"不要再提醒我\"][checked=false]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14586448",
          "exampleUrls": "https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de"
        },
        {
          "matches": "[vid=\"dialog_close_btn\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14586448",
          "exampleUrls": "https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de"
        }
      ]
    },
    {
      "name": "分段广告-单词页面卡片式广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"广告\"] - [vid=\"close\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12668574",
            "https://i.gkd.li/i/13800055"
          ]
        },
        {
          "matches": "[vid=\"close_pop\"][text=\"收起广告\"]",
          "preKeys": 0,
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12668583",
            "https://i.gkd.li/i/13800056"
          ]
        }
      ]
    },
    {
      "name": "全屏广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.youdao.dict:id/iv_close_bt\"]",
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            "com.youdao.dict.activity.DictSplashActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "首页-弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893419",
            "https://i.gkd.li/i/13263801"
          ]
        },
        {
          "matches": "@ImageView[id=\"com.youdao.dict:id/iv_close\"]",
          "activityIds": [
            "com.youdao.dict.edu.main.MainPopDialog",
            "com.youdao.dict.activity.MainActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "学习页面-弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/12893450"
        },
        {
          "matches": "[vid=\"skip_bottom_view\"]",
          "activityIds": "com.youdao.dict.activity.DictSplashActivity",
          "fastQuery": true,
          "key": 2,
          "name": "抽奖机会-弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13931202"
        },
        {
          "matches": "[vid=\"image\"] + [vid=\"close\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 3,
          "name": "首页-礼包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14296482"
        }
      ]
    },
    {
      "name": "局部广告-首页-视频广告",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[vid=\"home_ad_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[vid=\"aivClose\" || vid=\"course_one_course_close\" || vid=\"home_ad_close\" || vid=\"course_four_course_close\" || vid=\"promotion_close_zone\" || vid=\"ivClose\"][visibleToUser=true]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14468564",
            "https://i.gkd.li/i/14567234",
            "https://i.gkd.li/i/14895765",
            "https://i.gkd.li/i/14009705",
            "https://i.gkd.li/i/14559287",
            "https://i.gkd.li/i/17082441",
            "https://i.gkd.li/i/17115693",
            "https://i.gkd.li/i/34186897"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14468628",
          "exampleUrls": "https://e.gkd.li/df92c524-c732-4c16-9266-326056c9acf8"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[text=\"广告\"] - [vid=\"close\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12668574",
            "https://i.gkd.li/import/13800055"
          ]
        },
        {
          "matches": "[vid=\"close_pop\"][text=\"收起广告\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12668583",
            "https://i.gkd.li/import/13800056"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-VIP-弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.youdao.dict:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-评价弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.youdao.dict:id/btn_never\"][text*=\"不再提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"广告\"] - [vid=\"close\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12668574",
            "https://i.gkd.li/import/13800055"
          ]
        },
        {
          "matches": "[vid=\"close_pop\"][text=\"收起广告\"]",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "quickFind": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12668583",
            "https://i.gkd.li/import/13800056"
          ]
        }
      ]
    },
    {
      "name": "VIP-弹窗",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.youdao.dict:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "评价弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.youdao.dict:id/btn_never\"][text*=\"不再提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.youdao.dict:id/tv_version\"] + [id=\"com.youdao.dict:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
