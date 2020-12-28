npm i
npx json2ts -i schemas/ > types.d.ts
echo "export as namespace types;" >> types.d.ts 
