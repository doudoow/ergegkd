// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "阅读",
  "id": "com.heytap.reader",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.zhangyue.commonplugin:id/dialog_welfare_card_close\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19890575",
          "exampleUrls": "https://e.gkd.li/76f226bb-fcd4-439a-9eed-520a9c35a0c0",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页浮窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/float_delete\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13387138",
          "exampleUrls": "https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d",
          "key": 0
        },
        {
          "matches": "[vid=\"float_delete\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13387138",
          "exampleUrls": "https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-今日推荐",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/iv_float_read_continue_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/13387159",
          "exampleUrls": "https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_float_read_continue_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/13387159",
          "exampleUrls": "https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.zhangyue.commonplugin:id/dialog_welfare_card_close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13387130",
          "exampleUrls": "https://m.gkd.li/6328439/4feb19d4-f90f-4ed5-b025-9c2a6e4fc479",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页浮窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/float_delete\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13387138",
          "exampleUrls": "https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-今日推荐",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/iv_float_read_continue_close\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13387159",
          "exampleUrls": "https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.zhangyue.commonplugin:id/dialog_welfare_card_close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13387130",
          "exampleUrls": "https://m.gkd.li/6328439/4feb19d4-f90f-4ed5-b025-9c2a6e4fc479",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页浮窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/float_delete\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13387138",
          "exampleUrls": "https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-今日推荐",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/iv_float_read_continue_close\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13387159",
          "exampleUrls": "https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.zhangyue.commonplugin:id/dialog_welfare_card_close\"]",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13387130",
          "exampleUrls": "https://m.gkd.li/6328439/4feb19d4-f90f-4ed5-b025-9c2a6e4fc479",
          "key": 0
        }
      ]
    },
    {
      "name": "首页浮窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/float_delete\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13387138",
          "exampleUrls": "https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d",
          "key": 0
        }
      ]
    },
    {
      "name": "今日推荐",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.heytap.reader:id/iv_float_read_continue_close\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13387159",
          "exampleUrls": "https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0",
          "key": 0
        }
      ]
    }
  ]
});
