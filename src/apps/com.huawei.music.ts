// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为音乐",
  "id": "com.huawei.music",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20773821",
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.hms.ads.uiengine:id/hiad_skip_text\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745222"
          ],
          "key": 1
        },
        {
          "matches": "[vid=\"hiad_skip_text\"]",
          "snapshotUrls": "https://i.gkd.li/i/15443502",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-播放界面直播浮窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/live_info\"] < LinearLayout -2 [id=\"com.huawei.music:id/close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13067649",
          "key": 0
        },
        {
          "matches": "TextView[vid=\"live_info\"] < LinearLayout -2 [vid=\"close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13067649",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[vid=\"campaign_dialog_close_image_view\" || vid=\"iv_close\"][clickable=true]",
          "activityIds": [
            "com.android.mediacenter.PageActivity",
            "com.android.mediacenter.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14193738",
            "https://i.gkd.li/i/15523958",
            "https://i.gkd.li/i/24676040"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/00c83449-9809-4de8-9c7c-c6ce1b9fa2c3",
          "key": 0
        },
        {
          "matches": "[vid=\"campaign_dialog_close_image_view\"]",
          "activityIds": [
            "com.android.mediacenter.PageActivity",
            "com.android.mediacenter.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14193738",
            "https://i.gkd.li/i/15523958"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/00c83449-9809-4de8-9c7c-c6ce1b9fa2c3",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] + * [vid=\"close_radio_camp_button\"]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14193767",
          "exampleUrls": "https://m.gkd.li/57941037/b205c209-07c9-49e1-b72d-f9b31d9bc2d9"
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16812666",
          "exampleUrls": "https://e.gkd.li/586d860f-7f7c-41c7-af0f-bc17ac695a1a"
        }
      ]
    },
    {
      "name": "分段广告-首页横幅广告",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"ad_more_layout\"][visibleToUser=true]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20745787",
          "exampleUrls": "https://e.gkd.li/c64216a4-46bc-461d-9973-9ffcfab2fd51"
        },
        {
          "matches": "[text=\"直接关闭\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20745789",
          "exampleUrls": "https://e.gkd.li/9c4da3cf-897d-4b4a-bda0-e5e35af19b1d"
        }
      ]
    },
    {
      "name": "未分类-广告反馈下拉窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/label_title\"][text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13067574",
            "https://i.gkd.li/i/13067572",
            "https://i.gkd.li/i/13067571",
            "https://i.gkd.li/i/13067659",
            "https://i.gkd.li/i/13067665",
            "https://i.gkd.li/i/13067820"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-播放界面直播浮窗",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/live_info\"] < LinearLayout -2 [id=\"com.huawei.music:id/close_button\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13067649"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-播放（音乐、视频）页面广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/ad_icon\"&&visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13067956",
            "https://i.gkd.li/i/13067978",
            "https://i.gkd.li/i/13067387"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-评论区广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.huawei.music:id/ad_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13067937"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-视频播放页广告反馈",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "TextView[text=\"不感兴趣\"][id$=\"title\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13067986",
            "https://i.gkd.li/i/13067981"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-播放器上滑广告",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "ViewGroup > TextView[text=\"广告\"][id$=\"ad_icon\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068935",
            "https://i.gkd.li/i/13194163",
            "https://i.gkd.li/i/13263590"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告反馈下拉窗",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/label_title\"][text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067574",
            "https://i.gkd.li/import/13067572",
            "https://i.gkd.li/import/13067571",
            "https://i.gkd.li/import/13067659",
            "https://i.gkd.li/import/13067665",
            "https://i.gkd.li/import/13067820"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-播放（音乐、视频）页面广告",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/ad_icon\"&&visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067956",
            "https://i.gkd.li/import/13067978",
            "https://i.gkd.li/import/13067387"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区广告",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.huawei.music:id/ad_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067937"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-视频播放页广告反馈",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "TextView[text=\"不感兴趣\"][id$=\"title\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067986",
            "https://i.gkd.li/import/13067981"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-播放器上滑广告",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "ViewGroup > TextView[text=\"广告\"][id$=\"ad_icon\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068935",
            "https://i.gkd.li/import/13194163",
            "https://i.gkd.li/import/13263590"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "广告反馈下拉窗",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/label_title\"][text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067574",
            "https://i.gkd.li/import/13067572",
            "https://i.gkd.li/import/13067571",
            "https://i.gkd.li/import/13067659",
            "https://i.gkd.li/import/13067665",
            "https://i.gkd.li/import/13067820"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "播放界面直播浮窗",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/live_info\"] < LinearLayout -2 [id=\"com.huawei.music:id/close_button\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067649"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "播放（音乐、视频）页面广告",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "TextView[id=\"com.huawei.music:id/ad_icon\"&&visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067956",
            "https://i.gkd.li/import/13067978",
            "https://i.gkd.li/import/13067387"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "评论区广告",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.huawei.music:id/ad_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067937"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "视频播放页广告反馈",
      "enable": false,
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "TextView[text=\"不感兴趣\"][id$=\"title\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13067986",
            "https://i.gkd.li/import/13067981"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "播放器上滑广告",
      "enable": false,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "ViewGroup > TextView[text=\"广告\"][id$=\"ad_icon\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068935",
            "https://i.gkd.li/import/13194163",
            "https://i.gkd.li/import/13263590"
          ],
          "key": 0
        }
      ]
    }
  ]
});
