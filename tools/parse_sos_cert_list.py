# Parses the Secretary of State certified candidate list.
# Usage: extract the PDF text to cert.txt (e.g. with PyMuPDF), then run this script in the same directory; it writes cert.json.
import re,json
lines=[l.strip() for l in open('cert.txt')]
# drop page headers
skip=re.compile(r'^(General Election - November 3, 2026|Official Certified List of Candidates|\d+/\d+/2026|Page \d+ of \d+|\* Incumbent)$')
L=[l for l in lines if l and not skip.match(l)]
start=next(i for i,l in enumerate(L) if l=='Governor')
L=L[start:]
office_re=re.compile(r'^(Governor|Lieutenant Governor|Secretary of State|Controller|Treasurer|Attorney General|Insurance Commissioner|Superintendent of Public Instruction|Board of Equalization Member District \d+|United States Representative District \d+|State Senate District \d+|State Assembly Member District \d+|United States Senator.*)$')
parties={'Democratic','Republican','Non-Partisan','Libertarian','Green','American Independent','Peace and Freedom','Party Preference: None','No Party Preference'}
races=[];cur=None;i=0
other=[]
while i<len(L):
    l=L[i]
    if office_re.match(l):
        cur={'office':l,'cands':[]};races.append(cur);i+=1;continue
    if cur and i+2<len(L) and L[i+1] in parties:
        name=l;inc=name.endswith('*');name=name.rstrip('*').strip()
        cur['cands'].append({'name':name,'party':L[i+1],'desig':L[i+2],'inc':inc});i+=3;continue
    other.append(l);i+=1
json.dump(races,open('cert.json','w'),indent=1)
print(len(races));print([r['office'] for r in races if len(r['cands'])!=2])
print(other[:80])
