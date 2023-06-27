
import requests # request img from web
import shutil # save img locally



for i in range(0,100):

    file_name = str(i)+"img.png" #prompt user for file_name
    
    url = "https://products.groupdocs.app/signature/signature/downloadbarpreview?barType=Code39&barText=145"+str(i) #prompt user for img url
    res = requests.get(url, stream = True)

    if res.status_code == 200:
        with open(file_name,'wb') as f:
            shutil.copyfileobj(res.raw, f)
        print('Image sucessfully Downloaded: ',file_name)
    else:
        print('Image Couldn\'t be retrieved')
