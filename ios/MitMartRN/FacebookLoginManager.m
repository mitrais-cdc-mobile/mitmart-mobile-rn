//
//  FacebookLoginManager.m
//  FacebookLogin
//
//  Created by mitrais on 4/26/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "FacebookLoginManager.h"
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>

@implementation FacebookLoginManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(newSession:(RCTResponseSenderBlock)callback){
  FBSDKLoginManager *login = [[FBSDKLoginManager alloc] init];
  [login logInWithReadPermissions:@[@"public_profile",@"email"] fromViewController:nil handler:^(FBSDKLoginManagerLoginResult *result, NSError *error){
    
    if (error) {
      callback(@[@"Error", [NSNull null]]);
    }
    else if (result.isCancelled){
      callback(@[@"Cancelled", [NSNull null]]);
    }
    else
    {
      FBSDKAccessToken *token = result.token;
      NSString *tokenString = token.tokenString;
      NSString *userId = token.userID;
      NSDictionary *credentials = @{@"token" : tokenString, @"userId" : userId};
      callback (@[[NSNull null], credentials]);
    }
  }];
}

@end
