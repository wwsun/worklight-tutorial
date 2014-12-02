<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:h="http://www.w3.org/1999/xhtml"
                xmlns:dc="http://purl.org/dc/elements/1.1/" >
    <xsl:output method="text"/>
    
    <xsl:template match="/">
        {
	        'Items': [
		        <xsl:for-each select="//item">
	                {
		                'title': '<xsl:value-of select="title"/>',
		                'creator': '<xsl:value-of select="dc:creator"/>',
		                'link': '<xsl:value-of select="link"/>',
		                'pubDate': '<xsl:value-of select="pubDate"/>'
	                },
		        </xsl:for-each>
	        ]
        }
    </xsl:template>

</xsl:stylesheet>
