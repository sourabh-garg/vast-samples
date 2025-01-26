const InlineLinearTagXMLString =
    '<VAST version="4.1" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://www.iab.com/VAST">\n' +
    '  <Ad id="20001" sequence="1">\n' +
    '    <InLine>\n' +
    '      <AdSystem version="4.1">iabtechlab</AdSystem>\n' +
    '      <Error><![CDATA[https://example.com/error]]></Error>\n' +
    '      <Extensions>\n' +
    '        <Extension type="iab-Count">\n' +
    '          <total_available>\n' +
    '            <![CDATA[ 2 ]]>\n' +
    '          </total_available>\n' +
    '        </Extension>\n' +
    '      </Extensions>\n' +
    '      <Impression id="Impression-ID"><![CDATA[https://example.com/track/impression]]></Impression>\n' +
    '      <Pricing model="cpm" currency="USD">\n' +
    '        <![CDATA[ 25.00 ]]>\n' +
    '      </Pricing>\n' +
    '      <AdServingId>a532d16d-4d7f-4440-bd29-2ec0e693fc80</AdServingId>\n' +
    '      <AdTitle>iabtechlab video ad</AdTitle>\n' +
    '      <Creatives>\n' +
    '        <Creative id="5480" sequence="1" adId="2447226">\n' +
    '          <UniversalAdId idRegistry="Ad-ID">8465</UniversalAdId>\n' +
    '          <Linear>\n' +
    '            <TrackingEvents>\n' +
    '              <Tracking event="start" ><![CDATA[https://example.com/tracking/start]]></Tracking>\n' +
    '              <Tracking event="progress" offset="00:00:10"><![CDATA[http://example.com/tracking/progress-10]]></Tracking>\n' +
    '              <Tracking event="firstQuartile"><![CDATA[https://example.com/tracking/firstQuartile]]></Tracking>\n' +
    '              <Tracking event="midpoint"><![CDATA[https://example.com/tracking/midpoint]]></Tracking>\n' +
    '              <Tracking event="thirdQuartile"><![CDATA[https://example.com/tracking/thirdQuartile]]></Tracking>\n' +
    '              <Tracking event="complete"><![CDATA[https://example.com/tracking/complete]]></Tracking>\n' +
    '            </TrackingEvents>\n' +
    '            <Duration>00:00:16</Duration>\n' +
    '            <MediaFiles>\n' +
    '              <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="2000" width="1280" height="720" minBitrate="1500" maxBitrate="2500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5244" delivery="progressive" type="video/mp4" bitrate="1000" width="854" height="480" minBitrate="700" maxBitrate="1500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-mid-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5246" delivery="progressive" type="video/mp4" bitrate="600" width="640" height="360" minBitrate="500" maxBitrate="700" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-low-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '            </MediaFiles>\n' +
    '            <VideoClicks>\n' +
    '              <ClickThrough id="blog">\n' +
    '                <![CDATA[https://iabtechlab.com]]>\n' +
    '              </ClickThrough>\n' +
    '            </VideoClicks>\n' +
    '          </Linear>\n' +
    '        </Creative>\n' +
    '      </Creatives>\n' +
    '    </InLine>\n' +
    '  </Ad>\n' +
    '</VAST>';

const InlineCompanionXMLString =
    '<VAST version="4.1" xmlns="http://www.iab.com/VAST">\n' +
    '  <Ad id="20004" sequence="1" conditionalAd="false">\n' +
    '    <InLine>\n' +
    '      <AdSystem version="4.1">iabtechlab</AdSystem>\n' +
    '      <Error><![CDATA[https://example.com/error]]></Error>\n' +
    '      <Extensions>\n' +
    '        <Extension type="iab-Count">\n' +
    '          <total_available>\n' +
    '            <![CDATA[ 2 ]]>\n' +
    '          </total_available>\n' +
    '        </Extension>\n' +
    '      </Extensions>\n' +
    '      <Impression id="Impression-ID"><![CDATA[https://example.com/track/impression]]></Impression>\n' +
    '      <Pricing model="cpm" currency="USD">\n' +
    '        <![CDATA[ 25.00 ]]>\n' +
    '      </Pricing>\n' +
    '      <AdServingId>a532d16d-4d7f-4440-bd29-2ec0e693fc80</AdServingId>\n' +
    '      <AdTitle>\n' +
    '        <![CDATA[VAST 4.0 Pilot - Scenario 5]]>\n' +
    '      </AdTitle>\n' +
    '      <Creatives>\n' +
    '        <Creative id="5480" sequence="1" adId="2447226">\n' +
    '          <UniversalAdId idRegistry="Ad-ID" >8465</UniversalAdId>\n' +
    '          <CompanionAds>\n' +
    '            <Companion apiFramework="static" id="1232" width="100" height="150" assetWidth="250" assetHeight="200" expandedWidth="350" expandedHeight="250" adSlotId="3214" pxratio="1400">\n' +
    '              <StaticResource creativeType="image/png">\n' +
    '                <![CDATA[https://www.iab.com/wp-content/uploads/2014/09/iab-tech-lab-6-644x290.png]]>\n' +
    '              </StaticResource>\n' +
    '              <CompanionClickThrough>\n' +
    '                <![CDATA[https://iabtechlab.com]]>\n' +
    '              </CompanionClickThrough>\n' +
    '            </Companion>\n' +
    '          </CompanionAds>\n' +
    '        </Creative>\n' +
    '        <Creative id="5481" sequence="1" adId="2447226">\n' +
    '          <UniversalAdId idRegistry="Ad-ID" >8466</UniversalAdId>\n' +
    '          <Linear>\n' +
    '            <TrackingEvents>\n' +
    '              <Tracking event="start" ><![CDATA[https://example.com/tracking/start]]></Tracking>\n' +
    '              <Tracking event="progress" offset="00:00:10"><![CDATA[http://example.com/tracking/progress-10]]></Tracking>\n' +
    '              <Tracking event="firstQuartile"><![CDATA[https://example.com/tracking/firstQuartile]]></Tracking>\n' +
    '              <Tracking event="midpoint"><![CDATA[https://example.com/tracking/midpoint]]></Tracking>\n' +
    '              <Tracking event="thirdQuartile"><![CDATA[https://example.com/tracking/thirdQuartile]]></Tracking>\n' +
    '              <Tracking event="complete"><![CDATA[https://example.com/tracking/complete]]></Tracking>\n' +
    '            </TrackingEvents>\n' +
    '            <Duration>00:00:16</Duration>\n' +
    '            <MediaFiles>\n' +
    '              <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="2000" width="1280" height="720" minBitrate="1500" maxBitrate="2500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5244" delivery="progressive" type="video/mp4" bitrate="1000" width="854" height="480" minBitrate="700" maxBitrate="1500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-mid-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5246" delivery="progressive" type="video/mp4" bitrate="600" width="640" height="360" minBitrate="500" maxBitrate="700" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-low-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '            </MediaFiles>\n' +
    '            <VideoClicks>\n' +
    '              <ClickThrough id="blog">\n' +
    '                <![CDATA[https://iabtechlab.com]]>\n' +
    '              </ClickThrough>\n' +
    '            </VideoClicks>\n' +
    '          </Linear>\n' +
    '        </Creative>\n' +
    '      </Creatives>\n' +
    '      <Description>\n' +
    '        <![CDATA[This is sample companion ad tag with Linear ad tag. This tag while showing video ad on the player, will show a companion ad beside the player where it can be fitted. At most 3 companion ads can be placed. Modify accordingly to see your own content. ]]>\n' +
    '      </Description>\n' +
    '    </InLine>\n' +
    '  </Ad>\n' +
    '</VAST>\n' +
    'Footer\n';

const InlineNonLinearXMLString =
    '<VAST version="4.1" xmlns="http://www.iab.com/VAST">\n' +
    '  <Ad id="20005" sequence="1" conditionalAd="false">\n' +
    '    <InLine>\n' +
    '      <AdSystem version="4.1">iabtechlab</AdSystem>\n' +
    '      <Error>\n' +
    '        <![CDATA[https://example.com/error]]>\n' +
    '      </Error>\n' +
    '      <Extensions>\n' +
    '        <Extension type="iab-Count">\n' +
    '          <total_available>\n' +
    '            <![CDATA[ 2 ]]>\n' +
    '          </total_available>\n' +
    '        </Extension>\n' +
    '      </Extensions>\n' +
    '      <Impression id="Impression-ID">\n' +
    '        <![CDATA[https://example.com/track/impression]]>\n' +
    '      </Impression>\n' +
    '      <Pricing model="cpm" currency="USD">\n' +
    '        <![CDATA[ 25.00 ]]>\n' +
    '      </Pricing>\n' +
    '      <AdServingId>a532d16d-4d7f-4440-bd29-2ec0e693fc80</AdServingId>\n' +
    '      <AdTitle>\n' +
    '        <![CDATA[VAST 4.0 Pilot - Scenario 5]]>\n' +
    '      </AdTitle>\n' +
    '      <Creatives>\n' +
    '        <Creative id="5480" sequence="1" adId="2447226">\n' +
    '          <UniversalAdId idRegistry="Ad-ID">8465</UniversalAdId>\n' +
    '          <NonLinearAds>\n' +
    '            <NonLinear width="350" height="350">\n' +
    '              <StaticResource creativeType="image/png">\n' +
    '                <![CDATA[https://mms.businesswire.com/media/20150623005446/en/473787/21/iab_tech_lab.jpg]]>\n' +
    '              </StaticResource>\n' +
    '              <NonLinearClickThrough>\n' +
    '                <![CDATA[https://iabtechlab.com]]>\n' +
    '              </NonLinearClickThrough>\n' +
    '              <NonLinearClickTracking>\n' +
    '                <![CDATA[https://example.com/tracking/clickTracking]]>\n' +
    '              </NonLinearClickTracking>\n' +
    '            </NonLinear>\n' +
    '          </NonLinearAds>\n' +
    '        </Creative>\n' +
    '      </Creatives>\n' +
    '      <Description>\n' +
    "        <![CDATA[VAST 4.0 sample tag for Non Linear ad (i.e Overlay ad). Change the StaticResources to have a tag with your own content. Change NonLinear tag's parameters accordingly to view desired results.]]>\n" +
    '      </Description>\n' +
    '    </InLine>\n' +
    '  </Ad>\n' +
    '</VAST>';

const InlineSimpleXMLString =
    '<VAST version="4.1" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://www.iab.com/VAST">\n' +
    '  <Ad id="20001" sequence="1" conditionalAd="false">\n' +
    '    <InLine>\n' +
    '      <AdSystem version="4.1">iabtechlab</AdSystem>\n' +
    '      <Error><![CDATA[https://example.com/error]]></Error>\n' +
    '      <Impression id="Impression-ID"><![CDATA[https://example.com/track/impression]]></Impression>\n' +
    '      <Pricing model="cpm" currency="USD">\n' +
    '        <![CDATA[ 25.00 ]]>\n' +
    '      </Pricing>\n' +
    '      <AdServingId>a532d16d-4d7f-4440-bd29-2ec0e693fc80</AdServingId>\n' +
    '      <AdTitle>Inline Simple Ad</AdTitle>\n' +
    '      <AdVerifications></AdVerifications>\n' +
    '      <Advertiser>IAB Sample Company</Advertiser>\n' +
    '      <Category authority="https://www.iabtechlab.com/categoryauthority">AD CONTENT description category</Category>\n' +
    '      <Creatives>\n' +
    '        <Creative id="5480" sequence="1" adId="2447226">\n' +
    '          <UniversalAdId idRegistry="Ad-ID">8465</UniversalAdId>\n' +
    '          <Linear>\n' +
    '            <TrackingEvents>\n' +
    '              <Tracking event="start" ><![CDATA[https://example.com/tracking/start]]></Tracking>\n' +
    '              <Tracking event="progress" offset="00:00:10"><![CDATA[http://example.com/tracking/progress-10]]></Tracking>\n' +
    '              <Tracking event="firstQuartile"><![CDATA[https://example.com/tracking/firstQuartile]]></Tracking>\n' +
    '              <Tracking event="midpoint"><![CDATA[https://example.com/tracking/midpoint]]></Tracking>\n' +
    '              <Tracking event="thirdQuartile"><![CDATA[https://example.com/tracking/thirdQuartile]]></Tracking>\n' +
    '              <Tracking event="complete"><![CDATA[https://example.com/tracking/complete]]></Tracking>\n' +
    '            </TrackingEvents>\n' +
    '            <Duration>00:00:16</Duration>\n' +
    '            <MediaFiles>\n' +
    '              <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="2000" width="1280" height="720" minBitrate="1500" maxBitrate="2500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5244" delivery="progressive" type="video/mp4" bitrate="1000" width="854" height="480" minBitrate="700" maxBitrate="1500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-mid-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5246" delivery="progressive" type="video/mp4" bitrate="600" width="640" height="360" minBitrate="500" maxBitrate="700" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-low-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '            </MediaFiles>\n' +
    '            <VideoClicks>\n' +
    '              <ClickThrough id="blog">\n' +
    '                <![CDATA[https://iabtechlab.com]]>\n' +
    '              </ClickThrough>\n' +
    '            </VideoClicks>\n' +
    '          </Linear>\n' +
    '        </Creative>\n' +
    '      </Creatives>\n' +
    '    </InLine>\n' +
    '  </Ad>\n' +
    '</VAST>';

const InlineVideoClickTrackingXMLString =
    '<VAST version="4.1" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://www.iab.com/VAST">\n' +
    '  <Ad id="20009" sequence="1" conditionalAd="false">\n' +
    '    <InLine>\n' +
    '      <AdSystem version="4.1">iabtechlab</AdSystem>\n' +
    '      <Error><![CDATA[https://example.com/error]]></Error>\n' +
    '      <Extensions>\n' +
    '        <Extension type="iab-Count">\n' +
    '          <total_available>\n' +
    '            <![CDATA[ 2 ]]>\n' +
    '          </total_available>\n' +
    '        </Extension>\n' +
    '      </Extensions>\n' +
    '      <Impression id="Impression-ID"><![CDATA[https://example.com/track/impression]]></Impression>\n' +
    '      <Pricing model="cpm" currency="USD">\n' +
    '        <![CDATA[ 25.00 ]]>\n' +
    '      </Pricing>\n' +
    '      <AdServingId>a532d16d-4d7f-4440-bd29-2ec0e693fc89</AdServingId>\n' +
    '      <AdTitle>iabtechlab video ad</AdTitle>\n' +
    '      <Category authority="https://www.iabtechlab.com/categoryauthority">AD CONTENT description category</Category>\n' +
    '      <Creatives>\n' +
    '        <Creative id="5480" sequence="1" adId="2447226">\n' +
    '          <UniversalAdId idRegistry="Ad-ID">8465</UniversalAdId>\n' +
    '          <Linear>\n' +
    '            <TrackingEvents>\n' +
    '              <Tracking event="start" ><![CDATA[https://example.com/tracking/start]]></Tracking>\n' +
    '              <Tracking event="progress" offset="00:00:10"><![CDATA[http://example.com/tracking/progress-10]]></Tracking>\n' +
    '              <Tracking event="firstQuartile"><![CDATA[https://example.com/tracking/firstQuartile]]></Tracking>\n' +
    '              <Tracking event="midpoint"><![CDATA[https://example.com/tracking/midpoint]]></Tracking>\n' +
    '              <Tracking event="thirdQuartile"><![CDATA[https://example.com/tracking/thirdQuartile]]></Tracking>\n' +
    '              <Tracking event="complete"><![CDATA[https://example.com/tracking/complete]]></Tracking>\n' +
    '            </TrackingEvents>\n' +
    '            <Duration>00:00:16</Duration>\n' +
    '            <MediaFiles>\n' +
    '              <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="2000" width="1280" height="720" minBitrate="1500" maxBitrate="2500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5244" delivery="progressive" type="video/mp4" bitrate="1000" width="854" height="480" minBitrate="700" maxBitrate="1500" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-mid-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '              <MediaFile id="5246" delivery="progressive" type="video/mp4" bitrate="600" width="640" height="360" minBitrate="500" maxBitrate="700" scalable="1" maintainAspectRatio="1" codec="H.264">\n' +
    '                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro-low-resolution.mp4]]>\n' +
    '              </MediaFile>\n' +
    '            </MediaFiles>\n' +
    '            <VideoClicks>\n' +
    '              <ClickTracking>\n' +
    '                <![CDATA[http://myTrackingURL/clickTracking]]>\n' +
    '              </ClickTracking>\n' +
    '              <ClickThrough id="blog">\n' +
    '                <![CDATA[https://iabtechlab.com]]>\n' +
    '              </ClickThrough>\n' +
    '            </VideoClicks>\n' +
    '          </Linear>\n' +
    '        </Creative>\n' +
    '      </Creatives>\n' +
    '    </InLine>\n' +
    '  </Ad>\n' +
    '</VAST>';

export const InlineXMLString_4_1 = {
    InlineSimpleXMLString,
    InlineLinearTagXMLString,
    InlineNonLinearXMLString,
    InlineCompanionXMLString,
    InlineVideoClickTrackingXMLString,
};
