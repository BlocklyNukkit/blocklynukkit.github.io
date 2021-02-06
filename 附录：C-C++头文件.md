# C/C++头文件
[toc]
## 引用头文件
### 在C中引用
```
#include <blocklynukkit.h>
```
### 在C++中引用
```
#include <blocklynukkit>
using namespace std; //bn的所有函数都定义在BlocklyNukkit命名空间下
```
## 头文件内容
### C 头文件
```
#define EXPORT(name)  __attribute__((export_name(#name))) 
#include <stdio.h>
#include <stdarg.h>
#include <stdbool.h>
char tmp[8192];
void implementJFunction(char* as, char* use);
void getJString(int jStackIndex, char* to);
int getJInt(int jStackIndex);
long long int getJLong(int jStackIndex);
float getJFloat(int jStackIndex);
double getJDouble(int jStackIndex);
void getJIntArray(int jStackIndex, int* to);
void getJLongArray(int jStackIndex, long long int* to);
void getJFloatArray(int jStackIndex, float* to);
void getJDoubleArray(int jStackIndex, double* to);
int getJStaticMethod(char* className, char* name, char* parameter);
int getJMethod(int jStackIndex, char* name, char* parameter);
int invokeJMethod(int jStackIndex,int jStackObjIndex, int len, int* args);
int pushIntToJavaStack(int toPush);
int pushLongToJavaStack(long long int toPush);
int pushFloatToJavaStack(float toPush);
int pushDoubleToJavaStack(double toPush);
int pushStringToJavaStack(char* toPush);
int newJObject(char* className, int len, int* args);
int getJIndexByKey(char* key);
void castJObject(int jStackIndex, char* toCast);
void deleteJObject(int jStackIndex);
void logInfo(char* info);
void logWarning(char* info);
int logf(const char* format, ...){
	int result;
    va_list vp;
    va_start(vp, format);
    result = vsprintf(tmp, format, vp);
    va_end(vp);
	logInfo(tmp);
    return result;
}
int warnf(const char* format, ...){
	int result;
    va_list vp;
    va_start(vp, format);
    result = vsprintf(tmp, format, vp);
    va_end(vp);
	logWarning(tmp);
    return result;
}
int newJArray(char* className, int len);
void setJObjectKey(int jStackIndex, char* key);
int getJObjectFromJArray(int jStackIndex, int index);
bool isJObjectEqualsNull(int jStackIndex);
void setJArrayByIndex(int jStackIndex, int jObjStackIndex, int index);
int getJObjectField(int jStackIndex, char* fieldName);
int getJClassField(char* className, char* fieldName);
```
### C++ 头文件
```
#define EXPORT(name)  __attribute__((export_name(#name))) 

#include <stdio.h>
#include <stdarg.h>
#include <stdbool.h>
#include <string>
#include <cstring>

namespace BlocklyNukkit{
    char* tmp = new char[8192];
    char* string2CharPtr(std::string str){
        const char* st_ptr = str.c_str();
        int len = strlen(st_ptr);
        char* out_ptr = new char[len+1];
        strcpy(out_ptr, st_ptr);
        return out_ptr;
    }
    std::string charPtr2String(const char* ptr){
        std::string tmpstr = ptr;
        return tmpstr;
    }
    __attribute__((import_name("implementJFunction")))
    void implementJFunction(char* as, char* use);
    void implementJFunction(std::string as, std::string use){
        char* to_as = string2CharPtr(as);
        char* to_use = string2CharPtr(use);
        implementJFunction(to_as,to_use);
        delete[] to_as;
        delete[] to_use; 
    }
    __attribute__((import_name("getJString")))
    void getJString(int jStackIndex, char* to);
    std::string getJString(int jStackIndex){
        getJString(jStackIndex, tmp);
        std::string tmpstr = tmp;
        return tmpstr;
    }
    __attribute__((import_name("getJInt")))
    int getJInt(int jStackIndex);
    __attribute__((import_name("getJLong")))
    long long int getJLong(int jStackIndex);
    __attribute__((import_name("getJFloat")))
    float getJFloat(int jStackIndex);
    __attribute__((import_name("getJDouble")))
    double getJDouble(int jStackIndex);
    __attribute__((import_name("getJIntArray")))
    void getJIntArray(int jStackIndex, int* to);
    __attribute__((import_name("getJLongArray")))
    void getJLongArray(int jStackIndex, long long int* to);
    __attribute__((import_name("getJFloatArray")))
    void getJFloatArray(int jStackIndex, float* to);
    __attribute__((import_name("getJDoubleArray")))
    void getJDoubleArray(int jStackIndex, double* to);
    __attribute__((import_name("getJStaticMethod")))
    int getJStaticMethod(char* className, char* name, char* parameter);
    int getJStaticMethod(std::string className, std::string name, std::string parameter){
        char* to_className = string2CharPtr(className);
        char* to_name = string2CharPtr(name);
        char* to_parameter = string2CharPtr(parameter);
        int re = getJStaticMethod(to_className, to_name, to_parameter);
        delete[] to_className;
        delete[] to_name;
        delete[] to_parameter;
        return re;
    }
    __attribute__((import_name("getJMethod")))
    int getJMethod(int jStackIndex, char* name, char* parameter);
    int getJMethod(int jStackIndex, std::string name, std::string parameter){
        char* to_name = string2CharPtr(name);
        char* to_parameter = string2CharPtr(parameter);
        int re = getJMethod(jStackIndex, to_name, to_parameter);
        delete[] to_name;
        delete[] to_parameter;
        return re;
    }
    __attribute__((import_name("invokeJMethod")))
    int invokeJMethod(int jStackIndex,int jStackObjIndex, int len, int* args);
    __attribute__((import_name("pushIntToJavaStack")))
    int pushIntToJavaStack(int toPush);
    __attribute__((import_name("pushLongToJavaStack")))
    int pushLongToJavaStack(long long int toPush);
    __attribute__((import_name("pushFloatToJavaStack")))
    int pushFloatToJavaStack(float toPush);
    __attribute__((import_name("pushDoubleToJavaStack")))
    int pushDoubleToJavaStack(double toPush);
    __attribute__((import_name("pushStringToJavaStack")))
    int pushStringToJavaStack(char* toPush);
    int pushStringToJavaStack(std::string toPush){
        char* to_toPush = string2CharPtr(toPush);
        int re = pushStringToJavaStack(to_toPush);
        delete[] to_toPush;
        return re;
    }
    __attribute__((import_name("newJObject")))
    int newJObject(char* className, int len, int* args);
    int newJObject(std::string className, int len, int* args){
        char* to_className = string2CharPtr(className);
        int re = newJObject(to_className, len, args);
        delete[] to_className;
        return re;
    }
    __attribute__((import_name("getJIndexByKey")))
    int getJIndexByKey(char* key);
    int getJIndexByKey(std::string key){
        char* to_key = string2CharPtr(key);
        int re = getJIndexByKey(to_key);
        delete[] to_key;
        return re;
    }
    __attribute__((import_name("castJObject")))
    void castJObject(int jStackIndex, char* toCast);
    void castJObject(int jStackIndex, std::string toCast){
        char* to_toCast = string2CharPtr(toCast);
        castJObject(jStackIndex, to_toCast);
        delete[] to_toCast;
    }
    __attribute__((import_name("deleteJObject")))
    void deleteJObject(int jStackIndex);
    __attribute__((import_name("logInfo")))
    void logInfo(const char* info);
    __attribute__((import_name("logWarning")))
    void logWarning(const char* info);
    int logf(const char* format, ...){
        int result;
        va_list vp;
        va_start(vp, format);
        result = vsprintf(tmp, format, vp);
        va_end(vp);
        logInfo(tmp);
        return result;
    }
    int warnf(const char* format, ...){
        int result;
        va_list vp;
        va_start(vp, format);
        result = vsprintf(tmp, format, vp);
        va_end(vp);
        logWarning(tmp);
        return result;
    }
    __attribute__((import_name("newJArray")))
    int newJArray(char* className, int len);
    int newJArray(std::string className, int len){
        char* to_className = string2CharPtr(className);
        int re = newJArray(to_className, len);
        delete[] to_className;
        return re;
    }
    __attribute__((import_name("setJObjectKey")))
    void setJObjectKey(int jStackIndex, char* key);
    void setJObjectKey(int jStackIndex, std::string key){
        char* to_key = string2CharPtr(key);
        setJObjectKey(jStackIndex, to_key);
        delete[] to_key;
    }
    __attribute__((import_name("getJObjectFromJArray")))
    int getJObjectFromJArray(int jStackIndex, int index);
    __attribute__((import_name("isJObjectEqualsNull")))
    bool isJObjectEqualsNull(int jStackIndex);
    __attribute__((import_name("setJArrayByIndex")))
    void setJArrayByIndex(int jStackIndex, int jObjStackIndex, int index);
    __attribute__((import_name("getJObjectField")))
    int getJObjectField(int jStackIndex, char* fieldName);
    int getJObjectField(int jStackIndex, std::string fieldName){
        char* to_fieldName = string2CharPtr(fieldName);
        int re = getJObjectField(jStackIndex, to_fieldName);
        delete[] to_fieldName;
        return re;
    }
    __attribute__((import_name("getJClassField")))
    int getJClassField(char* className, char* fieldName);
    int getJClassField(std::string className, std::string fieldName){
        char* to_className = string2CharPtr(className);
        char* to_fieldName = string2CharPtr(fieldName);
        int re = getJClassField(to_className,to_fieldName);
        delete[] to_className;
        delete[] to_fieldName;
        return re;
    }

    class BNLogFlag{
        public:
            short flag;
            short data;
            BNLogFlag(short flagNum, short dataNum){
                flag = flagNum;
                data = dataNum;
            }
    };

    BNLogFlag endl = BNLogFlag(1,0);
    BNLogFlag flush = BNLogFlag(2,0);
    BNLogFlag infoMode = BNLogFlag(3,0);
    BNLogFlag warningMode = BNLogFlag(3,1);
    
    std::string BLACK = "§0";
    std::string DARK_BLUE = "§1";
    std::string DARK_GREEN = "§2";
    std::string DRAK_AQUA = "§3";
    std::string DARK_RED = "§4";
    std::string DARK_PURPLE = "§5";
    std::string GOLD = "§6";
    std::string GRAY = "§7";
    std::string DARK_GRAY = "§8";
    std::string BLUE = "§9";
    std::string GREEN = "§a";
    std::string AQUA = "§b";
    std::string RED = "§c";
    std::string LIGHT_PURPLE = "§d";
    std::string YELLOW = "§e";
    std::string WHITE = "§f";
    std::string MINECOIN_GOLD = "§g";
    std::string OBFUSCATED = "§k";
    std::string BOLD = "§l";
    std::string STRIKETHROUGH = "§m";
    std::string UNDERLINE = "§n";
    std::string ITALIC = "§o";
    std::string RESET = "§r";

    class BNLogStream{
        private:
            std::string inner = "";
            /**
             * 此成员变量标志输出模式：
             * 0: info
             * 1: warning
             */
            short printMode;
            void doPrint(){
                if(printMode == 0){
                    logInfo(inner.c_str());
                }else{
                    logWarning(inner.c_str());
                }
                inner = "";
            }
        public:
            BNLogStream(){
                printMode = 0;
            }
            BNLogStream(short mode){
                printMode = mode;
            }
            BNLogStream& operator << (std::string str){
                inner += str;
                return *this;
            }
            BNLogStream& operator << (const char* str){
                return this-> operator<<(charPtr2String(str));
            }
            BNLogStream& operator << (int str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (float str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (double str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (long long int str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (bool str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (short str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (unsigned int str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (unsigned long long int str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (unsigned short str){
                inner += std::to_string(str);
                return *this;
            }
            BNLogStream& operator << (BNLogFlag flag){
                if(flag.flag == 1 || flag.flag == 2){
                    doPrint();
                }else if(flag.flag == 3){
                    printMode = flag.data;
                }
                return *this;
            }
    };

    BNLogStream logger = BNLogStream(0);
}

```