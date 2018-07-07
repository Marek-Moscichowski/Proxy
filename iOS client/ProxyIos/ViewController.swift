//
//  ViewController.swift
//  ProxyIos
//
//  Created by Marek Mościchowski on 07.07.2018.
//  Copyright © 2018 Marek Mościchowski. All rights reserved.
//

import UIKit
import Alamofire

class ViewController: UIViewController {
    var afManager : SessionManager!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let configuration = URLSessionConfiguration.default
        
        let config = URLSessionConfiguration.default
        config.requestCachePolicy = URLRequest.CachePolicy.reloadIgnoringLocalCacheData
        config.connectionProxyDictionary = [AnyHashable: Any]()
        config.connectionProxyDictionary?[kCFNetworkProxiesHTTPEnable as String] = 1
        config.connectionProxyDictionary?[kCFNetworkProxiesHTTPProxy as String] = "192.168.178.20"
        config.connectionProxyDictionary?[kCFNetworkProxiesHTTPPort as String] = 8001
        config.connectionProxyDictionary?[kCFStreamPropertyHTTPSProxyHost as String] = "192.168.178.20"
        config.connectionProxyDictionary?[kCFStreamPropertyHTTPSProxyPort as String] = 8001
        
//        configuration.connectionProxyDictionary =
        var proxyConfiguration = [NSObject: AnyObject]()
        proxyConfiguration[kCFNetworkProxiesHTTPProxy] = "127.0.0.1" as AnyObject?
        proxyConfiguration[kCFNetworkProxiesHTTPPort] = "8002" as AnyObject?
        proxyConfiguration[kCFStreamPropertyHTTPSProxyHost] = "127.0.0.1" as AnyObject?
        proxyConfiguration[kCFStreamPropertyHTTPSProxyPort] = "8002" as AnyObject?
        proxyConfiguration[kCFNetworkProxiesHTTPEnable] = 1 as AnyObject?
        let keyy = kCFStreamPropertyHTTPSProxyHost as! NSString
        proxyConfiguration[keyy] = "127.0.0.1" as AnyObject?
        proxyConfiguration[kCFStreamPropertyHTTPSProxyPort as! NSString] = NSNumber(value: 8002) as AnyObject?
        configuration.connectionProxyDictionary = proxyConfiguration
        afManager = Alamofire.SessionManager(configuration: config)
        afManager.request(URL(string: "https://dog.ceo/api/breeds/list/all")!).responseJSON { (resp) in
//            print(resp.response?.debugDescription)
//            String( resp.data
            print("gogogo = \(String(data: resp.data!, encoding: .utf8))")
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

