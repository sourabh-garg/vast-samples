const WrapperTagXMLString =
    '<VAST version="4.1" xmlns="http://www.iab.com/VAST">\n' +
    '  <Ad id="20011" sequence="1" conditionalAd="false">\n' +
    '    <Wrapper followAdditionalWrappers="0" allowMultipleAds="1" fallbackOnNoAd="0">\n' +
    '      <AdSystem version="4.0">iabtechlab</AdSystem>\n' +
    '      <Error><![CDATA[https://example.com/error]]></Error>\n' +
    '      <Impression id="Impression-ID"><![CDATA[https://example.com/track/impression]]></Impression>\n' +
    '      <Creatives>\n' +
    '        <Creative id="5480" sequence="1" adId="2447226">\n' +
    '          <CompanionAds>\n' +
    '            <Companion id="1232" width="100" height="150" assetWidth="250" assetHeight="200" expandedWidth="350" expandedHeight="250" apiFramework="VPAID" adSlotId="3214" pxratio="1400">\n' +
    '              <StaticResource creativeType="image/png">\n' +
    '                <![CDATA[https://www.iab.com/wp-content/uploads/2014/09/iab-tech-lab-6-644x290.png]]>\n' +
    '              </StaticResource>\n' +
    '              <CompanionClickThrough>\n' +
    '                <![CDATA[https://iabtechlab.com]]>\n' +
    '              </CompanionClickThrough>\n' +
    '            </Companion>\n' +
    '          </CompanionAds>\n' +
    '        </Creative>\n' +
    '      </Creatives>\n' +
    '      <VASTAdTagURI>\n' +
    '        <![CDATA[https://raw.githubusercontent.com/InteractiveAdvertisingBureau/VAST_Samples/master/VAST%204.0%20Samples/Inline_Companion_Tag-test.xml]]>\n' +
    '      </VASTAdTagURI>\n' +
    '    </Wrapper>\n' +
    '  </Ad>\n' +
    '</VAST>';

export const WrappedXMLString_4_1 = {
    WrapperWithInlineData: WrapperTagXMLString,
};
