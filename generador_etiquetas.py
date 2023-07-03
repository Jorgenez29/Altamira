
import requests # request img from web
import shutil # save img locally


materias = ["CS", "CN", "IN", "MT", "LC", "LG"]

materias_n = {

    "CS":180,
    "CN":180,
    "IN":180,
    "MT":540,
    "LC":540,
    "LG":540
}

# for x in materias:
#     print("{}  {}".format(x, materias_n[x]))


for x in materias:

    l = materias_n[str(x)]

    for i in range(0,l):

        file_name = str(i)+"img.png" #prompt user for file_name
        
        url = "https://products.groupdocs.app/signature/signature/downloadbarpreview?barType=Code39&barText="+str(x)+"0"+str(i) #prompt user for img url
        res = requests.get(url, stream = True)

        if res.status_code == 200:
            with open(file_name,'wb') as f:
                shutil.copyfileobj(res.raw, f)
            print('Image sucessfully Downloaded: {}   {} '.format(file_name, x))
        else:
            print('Image Couldn\'t be retrieved')
        try:
            shutil.move(file_name, "./Etiquetas_"+str(x)+"/"+str(file_name))
        except:
            pass

